﻿using System;
using System.Collections.Generic;

using CMS.Base;

using System.Linq;

using CMS.DataEngine;
using CMS.Helpers;
using CMS.SiteProvider;
using CMS.UIControls;


public partial class CMSModules_AdminControls_Controls_UIControls_BindingEditItem : CMSAbstractUIWebpart
{
    #region "Variables"

    private string mCurrentValues;

    #endregion


    #region "Properties"

    /// <summary>
    /// Indicates whether localized filtering should be used in selection dialog.
    /// </summary>
    public bool AllowLocalizedFilteringInSelectionDialog
    {
        get
        {
            return GetBoolContextValue("AllowLocalizedFilteringInSelectionDialog", editElem.AllowLocalizedFilteringInSelectionDialog);
        }
        set
        {
            SetValue("AllowLocalizedFilteringInSelectionDialog", value);
        }
    }


    /// <summary>
    /// Current values
    /// </summary>
    private string CurrentValues
    {
        get
        {
            return mCurrentValues ?? (mCurrentValues = GetCurrentValues());
        }
    }


    /// <summary>
    /// Object type for M:N relationship
    /// </summary>
    public String BindingObjectType
    {
        get
        {
            return GetStringContextValue("BindingObjectType");
        }
        set
        {
            SetValue("BindingObjectType", value);
        }
    }


    /// <summary>
    /// Resource prefix for multi uni selector
    /// </summary>
    public override String ResourcePrefix
    {
        get
        {
            return GetStringContextValue("ResourcePrefix", base.ResourcePrefix);
        }
        set
        {
            SetValue("ResourcePrefix", value);
        }
    }


    /// <summary>
    /// The latter object type in M:N relationship
    /// </summary>
    public String TargetObjectType
    {
        get
        {
            return GetStringContextValue("TargetObjectType");
        }
        set
        {
            SetValue("TargetObjectType", value);
        }
    }


    /// <summary>
    /// Where condition
    /// </summary>
    public String WhereCondition
    {
        get
        {
            return GetStringContextValue("WhereCondition", String.Empty, true, true);
        }
        set
        {
            SetValue("WhereCondition", value);
        }
    }


    /// <summary>
    /// Dialog where condition
    /// </summary>
    public String DialogWhereCondition
    {
        get
        {
            return GetStringContextValue("DialogWhereCondition", String.Empty, true, true);
        }
        set
        {
            SetValue("DialogWhereCondition", value);
        }
    }


    /// <summary>
    /// Returns true if the control processing should be stopped
    /// </summary>
    public override bool StopProcessing
    {
        get
        {
            return base.StopProcessing;
        }
        set
        {
            base.StopProcessing = value;
            editElem.StopProcessing = value;
        }
    }

    #endregion


    #region "Methods"

    protected override void OnInit(EventArgs e)
    {
        editElem.ContextResolver.SetNamedSourceData("UIContext", UIContext);
        base.OnInit(e);

        if (UIContext.EditedObject == null)
        {
            ShowError(GetString("ui.editing.noobjecttype"));
            StopProcessing = true;
        }
    }


    protected void Page_Load(object sender, EventArgs e)
    {
        if (StopProcessing)
        {
            // No actions if processing is stopped
        }
        else
        {
            editElem.OnSelectionChanged += editElem_OnSelectionChanged;

            var bindingInfo = ModuleManager.GetObject(BindingObjectType);

            // Do not continue if binding object is not defined
            if (bindingInfo == null)
            {
                ShowError(GetString("ui.editing.nobindingobjecttype"));
                return;
            }

            var bindingTypeInfo = bindingInfo.TypeInfo;

            if (String.IsNullOrEmpty(TargetObjectType))
            {
                TargetObjectType = GetTargetObjectType(bindingTypeInfo);
            }

            // Do not continue if target object is not defined
            if (ModuleManager.GetReadOnlyObject(TargetObjectType) == null)
            {
                ShowError(GetString("ui.editing.notargetobjecttype"));
                return;
            }

            // Set binding properties based on edited object to ensure correct site/global permission checking
            var editedObject = (BaseInfo)editElem.EditedObject;
            if (editedObject != null)
            {
                // Set parent object ID if available
                if (bindingTypeInfo.ParentObjectType.EqualsCSafe(editedObject.TypeInfo.ObjectType, true))
                {
                    bindingInfo.SetValue(bindingTypeInfo.ParentIDColumn, editedObject.Generalized.ObjectID);
                }
                else
                {
                    // Set referenced ID if available
                    var dependency = bindingTypeInfo.ObjectDependencies.FirstOrDefault(d => d.DependencyObjectType.EqualsCSafe(editedObject.TypeInfo.ObjectType, true));
                    if (dependency != null)
                    {
                        bindingInfo.SetValue(dependency.DependencyColumn, editedObject.Generalized.ObjectID);
                    }
                }
            }

            //Check view permission
            if (!CheckViewPermissions(bindingInfo))
            {
                editElem.StopProcessing = true;
                editElem.Visible = false;
                return;
            }

            // Check edit permissions
            if (!CheckEditPermissions(bindingInfo))
            {
                editElem.Enabled = false;
                ShowError(GetString("ui.notauthorizemodified"));
            }

            // Set uni selector
            editElem.ObjectType = TargetObjectType;
            editElem.ResourcePrefix = ResourcePrefix;
            editElem.WhereCondition = DialogWhereCondition;
            editElem.AllowLocalizedFilteringInSelectionDialog = AllowLocalizedFilteringInSelectionDialog;

            if (!RequestHelper.IsPostBack())
            {
                // Set values
                editElem.Value = CurrentValues;
            }
        }
    }


    /// <summary>
    /// Gets the current values from database
    /// </summary>
    private string GetCurrentValues()
    {
        var bindingColumns = GetBindingColumns();
        if (bindingColumns == null)
        {
            return String.Empty;
        }

        var bindingTargetIdColumn = bindingColumns.Item2;

        // Get all items based on where condition
        var targetIds = ModuleManager.GetReadOnlyObject(BindingObjectType)
                                     .Generalized
                                     .GetDataQuery(true, s => s.Where(WhereCondition).Column(bindingTargetIdColumn), false)
                                     .Select(row => row[bindingTargetIdColumn]);

        return TextHelper.Join(";", targetIds);
    }


    private string GetTargetObjectType(ObjectTypeInfo bindingTypeInfo)
    {
        // Search for parent in TYPEINFO
        var parent = bindingTypeInfo.ParentObjectType;
        if (!String.IsNullOrEmpty(parent) && (parent != ObjectType))
        {
            // If parent is different from control's object type use it.
            return parent;
        }

        // Otherwise search in site object
        var siteObject = bindingTypeInfo.SiteIDColumn;
        if (!String.IsNullOrEmpty(siteObject) && (siteObject != ObjectTypeInfo.COLUMN_NAME_UNKNOWN))
        {
            return SiteInfo.OBJECT_TYPE;
        }

        // If site object not specified use bindings. Find first binding dependency and use it's object type
        var dependency = bindingTypeInfo.ObjectDependencies.FirstOrDefault(x => x.DependencyType == ObjectDependencyEnum.Binding);
        if (dependency != null)
        {
            return dependency.DependencyObjectType;
        }

        return null;
    }


    private void editElem_OnSelectionChanged(object sender, EventArgs ea)
    {
        SaveData();
    }


    /// <summary>
    /// Returns binding column names for binding object type.
    /// 1. Try to search ParentObjectType (there should be first binding column name). 
    /// 2. Search for site ID column. In site bindings you will find column name for site.
    /// 3. If one of the columns is still not found, search all object's dependencies.
    /// </summary>
    private IEnumerable<string> GetObjectDependencyColumn(string dependencyObjectType)
    {
        var bindingTypeInfo = ObjectTypeManager.GetTypeInfo(BindingObjectType);
        var dependencyTypeInfo = ObjectTypeManager.GetTypeInfo(dependencyObjectType);

        // 1. ParentObjectType
        if (ParentObjectTypeEqualsDependencyObjectType(bindingTypeInfo, dependencyTypeInfo))
        {
            yield return bindingTypeInfo.ParentIDColumn;
        }

        // 2. Site bindings
        if ((bindingTypeInfo.SiteIDColumn != ObjectTypeInfo.COLUMN_NAME_UNKNOWN) &&
            dependencyObjectType.EqualsCSafe(PredefinedObjectType.SITE, true))
        {
            yield return bindingTypeInfo.SiteIDColumn;
        }

        // 3. Object's dependencies
        if (bindingTypeInfo.DependsOn != null)
        {
            foreach (var dependency in bindingTypeInfo.DependsOn
                                                      .Where(d => d.DependencyObjectType.EqualsCSafe(dependencyObjectType, true)))
            {
                yield return dependency.DependencyColumn;
            }
        }
    }


    private static bool ParentObjectTypeEqualsDependencyObjectType(ObjectTypeInfo bindingTypeInfo, ObjectTypeInfo dependencyTypeInfo)
    {
        return bindingTypeInfo.ParentObjectType.EqualsCSafe(dependencyTypeInfo.ObjectType, true) ||
               bindingTypeInfo.ParentObjectType.EqualsCSafe(dependencyTypeInfo.OriginalObjectType, true);
    }


    /// <summary>
    /// Store selected (unselected) roles.
    /// </summary>
    private void SaveData()
    {
        if (!editElem.Enabled)
        {
            ShowError(GetString("ui.notauthorizemodified"));
            return;
        }

        string newValues = ValidationHelper.GetString(editElem.Value, null);

        bool saved = false;

        var bindingColumns = GetBindingColumns();
        if (bindingColumns != null)
        {
            string deletedItems = DataHelper.GetNewItemsInList(newValues, CurrentValues);
            var bindingsToDelete = GetBindings(deletedItems, bindingColumns, false);
            foreach (var bi in bindingsToDelete)
            {
                bi.Delete();

                saved = true;
            }

            string addedItems = DataHelper.GetNewItemsInList(CurrentValues, newValues);
            var bindingsToAdd = GetBindings(addedItems, bindingColumns, true);
            foreach (var bi in bindingsToAdd)
            {
                bi.Insert();

                saved = true;
            }

            if (saved)
            {
                ObjectTypeManager.GetTypeInfo(ObjectType)
                                 .InvalidateAllObjects();

                ShowChangesSaved();
            }
        }
    }


    /// <summary>
    /// Returns a pair of binding columns.
    /// The first one is the 'parent object' ID column, for whom the bindings are displayed.
    /// The second one is the 'other object' ID column, these objects are listed for selected 'parent'.
    /// </summary>
    /// <returns></returns>
    private Tuple<string, string> GetBindingColumns()
    {
        // Find both column names for the binding
        string objCol = GetObjectDependencyColumn(ObjectType)
            .FirstOrDefault();

        if (String.IsNullOrEmpty(objCol))
        {
            return null;
        }

        // Second time skip the already used column, in case both bound types are the same
        string targetCol = GetObjectDependencyColumn(TargetObjectType)
            .Except(new[] { objCol })
            .FirstOrDefault();

        if (String.IsNullOrEmpty(targetCol))
        {
            return null;
        }

        return Tuple.Create(objCol, targetCol);
    }


    /// <summary>
    /// Returns binding info objects for each changed item.
    /// </summary>
    /// <param name="changedItems">Comma separated list of changed IDs</param>
    /// <param name="bindingColumns">Parent ID column and other related object ID column in the binding object</param>
    /// <param name="create">If true, bindings will not be retrieved from database. Otherwise only if the binding has own ID column.</param>
    private IEnumerable<BaseInfo> GetBindings(string changedItems, Tuple<string, string> bindingColumns, bool create)
    {
        var bindingsToProcess = Enumerable.Empty<BaseInfo>();

        if (!String.IsNullOrEmpty(changedItems))
        {
            var items = changedItems.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            if (items.Any())
            {
                var bindingTypeInfo = ObjectTypeManager.GetTypeInfo(BindingObjectType);

                if (create || bindingTypeInfo.IDColumn == ObjectTypeInfo.COLUMN_NAME_UNKNOWN)
                {
                    bindingsToProcess = CreateBindings(items, bindingColumns);
                }
                else
                {
                    // If binding has object ID column, retrieve all changed objects by single query
                    bindingsToProcess = new ObjectQuery(BindingObjectType, false)
                        .WhereEquals(bindingColumns.Item1, ObjectID)
                        .WhereIn(bindingColumns.Item2, items);
                }
            }
        }

        return bindingsToProcess;
    }


    private IEnumerable<BaseInfo> CreateBindings(IEnumerable<string> targetIds, Tuple<string, string> bindingColumns)
    {
        foreach(var item in targetIds)
        {
            var bi = ModuleManager.GetObject(BindingObjectType);

            bi.SetValue(bindingColumns.Item1, ObjectID);
            bi.SetValue(bindingColumns.Item2, ValidationHelper.GetInteger(item, 0));

            yield return bi;
        }
    }

    #endregion
}
