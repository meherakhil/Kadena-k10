using CMS.DataEngine;
using CMS.DocumentEngine;
using CMS.DocumentEngine.Types.KDA;
using CMS.DocumentEngine.Web.UI;
using CMS.EventLog;
using CMS.Helpers;
using CMS.Membership;
using CMS.SiteProvider;
using Kadena.Old_App_Code.Kadena.EmailNotifications;
using System;
using System.Data;
using System.Linq;
using System.Web.UI.WebControls;

public partial class CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter : CMSAbstractBaseFilterControl
{
    /// <summary>
    /// Content loaded event handler.
    /// </summary>
    private void SetupControl()
    {
        if (this.StopProcessing)
        {
            this.Visible = false;
        }
        else if (!RequestHelper.IsPostBack())
        {
            BindPrograms();
            BindCategories();
            BindButtons();
            BindReourceStrings();
        }
    }

    /// <summary>
    /// Binding the Resource string text to buttons
    /// </summary>
    public void BindReourceStrings()
    {
        btnNewProduct.Text = ValidationHelper.GetString(ResHelper.GetString("Kadena.CampaignProduct.NewProductsText"), string.Empty);
        btnAllowUpates.Text = ValidationHelper.GetString(ResHelper.GetString("Kadena.CampaignProduct.AllowProductsUpdateText"), string.Empty);
        btnNotifyAdmin.Text = ValidationHelper.GetString(ResHelper.GetString("Kadena.CampaignProduct.NotifyGlobalAdminText"), string.Empty);
    }

    /// <summary>
    /// Generates a WHERE condition and ORDER BY clause based on the current filtering selection.
    /// </summary>
    private void SetFilter()
    {
        try
        {
            string where = null;
            if (!string.IsNullOrEmpty(txtSearchProducts.Text))
            {
                where += $"p.ProductName like '%{ SqlHelper.EscapeLikeText(SqlHelper.EscapeQuotes(txtSearchProducts.Text))} %'";
            }
            if (ValidationHelper.GetInteger(ddlPrograms.SelectedValue, 0) != 0)
            {
                int programID = ValidationHelper.GetInteger(ddlPrograms.SelectedValue, 0);
                where += where != null ? $"and p.ProgramID={ programID}" : $"p.ProgramID={ programID}";
            }
            if (ValidationHelper.GetInteger(ddlProductcategory.SelectedValue, 0) != 0)
            {
                int categoryID = ValidationHelper.GetInteger(ddlProductcategory.SelectedValue, 0);
                where += where != null ? $"and p.CategoryID={ categoryID}" : $"p.CategoryID={ categoryID}";
            }
            if (where != null)
            {
                this.WhereCondition = where;
            }
            this.RaiseOnFilterChanged();
            BindButtons();
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "SetFilter", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// Binding the busttons based on roles
    /// </summary>
    public void BindButtons()
    {
        try
        {
            var nodeGuid = CurrentDocument.NodeGUID;
            Campaign campaign = CampaignProvider.GetCampaign(nodeGuid, CurrentDocument.DocumentCulture, CurrentSite.SiteName);
            if (campaign != null)
            {
                var products = campaign.AllChildren.WithAllData
                    .Where(xx => xx.ClassName == CampaignsProduct.CLASS_NAME && xx.NodeSiteID == CurrentSite.SiteID)
                    .ToList();
                bool initiated = campaign.CampaignInitiate;
                bool gAdminNotified = campaign.GlobalAdminNotified;
                bool openCampaign = campaign.OpenCampaign;
                bool closeCampaign = campaign.CloseCampaign;
                string gAdminRoleName = SettingsKeyInfoProvider.GetValue(CurrentSite.SiteName + ".KDA_GlobalAminRoleName");
                string adminRoleName = SettingsKeyInfoProvider.GetValue(CurrentSite.SiteName + ".KDA_AdminRoleName");
                if (CurrentUser.IsInRole(gAdminRoleName, SiteContext.CurrentSiteName))
                {
                    if (products.Count == 0)
                    {
                        btnAllowUpates.Visible = true;
                        btnAllowUpates.Enabled = false;
                        btnAllowUpates.CssClass = "disable btn-action";
                    }
                    if (!initiated)
                    {
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = false;
                        btnNewProduct.CssClass = "disable btn-action";
                        btnAllowUpates.Visible = true;
                        btnAllowUpates.Enabled = false;
                        btnAllowUpates.CssClass = "disable btn-action";
                    }
                    else if (gAdminNotified && !openCampaign && !closeCampaign)
                    {
                        btnNotifyAdmin.Visible = false;
                        btnAllowUpates.Visible = true;
                        btnAllowUpates.Enabled = true;
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = true;
                    }
                    else if (!gAdminNotified && !openCampaign && !closeCampaign)
                    {
                        btnAllowUpates.Visible = true;
                        btnAllowUpates.Enabled = false;
                        btnAllowUpates.CssClass = "disable btn-action";
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = true;
                    }
                    else
                    {
                        btnAllowUpates.Visible = true;
                        btnAllowUpates.Enabled = false;
                        btnAllowUpates.CssClass = "disable btn-action";
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = false;
                        btnNewProduct.CssClass = "disable btn-action";
                    }
                }
                else if (CurrentUser.IsInRole(adminRoleName, SiteContext.CurrentSiteName))
                {
                    if (products.Count == 0)
                    {
                        btnNotifyAdmin.Visible = true;
                        btnNotifyAdmin.Enabled = false;
                        btnNotifyAdmin.CssClass = "disable btn-action";
                    }
                    else if (!initiated)
                    {
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = false;
                        btnNewProduct.CssClass = "disable btn-action";
                        btnNotifyAdmin.Visible = true;
                        btnNotifyAdmin.Enabled = false;
                        btnNotifyAdmin.CssClass = "disable btn-action";
                    }
                    else if (gAdminNotified && !openCampaign && !closeCampaign)
                    {
                        btnNotifyAdmin.Visible = true;
                        btnNotifyAdmin.Enabled = false;
                        btnNotifyAdmin.CssClass = "disable btn-action";
                        btnAllowUpates.Visible = false;
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = false;
                        btnNewProduct.CssClass = "disable btn-action";
                    }
                    else if (openCampaign || closeCampaign)
                    {
                        btnNotifyAdmin.Visible = true;
                        btnNotifyAdmin.Enabled = false;
                        btnNotifyAdmin.CssClass = "disable btn-action";
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = false;
                        btnNewProduct.CssClass = "disable btn-action";
                        btnAllowUpates.Visible = false;
                    }
                    else
                    {
                        btnNotifyAdmin.Visible = true;
                        btnNotifyAdmin.Enabled = true;
                        btnNewProduct.Visible = true;
                        btnNewProduct.Enabled = true;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "BindButtons", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// Init event handler.
    /// </summary>
    protected override void OnInit(EventArgs e)
    {
        SetupControl();
        base.OnInit(e);
    }

    /// <summary>
    /// PreRender event handler
    /// </summary>
    protected override void OnPreRender(EventArgs e)
    {
        if (RequestHelper.IsPostBack())
        {
            SetFilter();
        }
        base.OnPreRender(e);
    }

    /// <summary>
    /// search data by given text
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void txtSearchProducts_TextChanged(object sender, EventArgs e)
    {
        SetFilter();
    }

    /// <summary>
    /// Bind the prograns to dropdown
    /// </summary>
    public void BindPrograms()
    {
        try
        {
            int campaignID = CurrentDocument.GetIntegerValue("CampaignID", default(int));
            if (campaignID != default(int))
            {
                var programs = ProgramProvider.GetPrograms()
                    .WhereEquals("NodeSiteID", CurrentSite.SiteID)
                    .WhereEquals("CampaignID", campaignID)
                    .Columns("ProgramID,ProgramName")
                    .ToList();
                if (programs != null)
                {
                    ddlPrograms.DataSource = programs;
                    ddlPrograms.DataTextField = "ProgramName";
                    ddlPrograms.DataValueField = "ProgramID";
                    ddlPrograms.DataBind();
                    string selectText = ValidationHelper.GetString(ResHelper.GetString("Kadena.CampaignProduct.SelectProgramText"), string.Empty);
                    ddlPrograms.Items.Insert(0, new ListItem(selectText, "0"));
                }
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "BindPrograms", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// Bind Categories to dropdown
    /// </summary>
    public void BindCategories()
    {
        try
        {
            var categories = ProductCategoryProvider.GetProductCategories()
                .WhereEquals("NodeSiteID", CurrentSite.SiteID)
                .Columns("ProductCategoryID,ProductCategoryTitle")
                .Select(x => new ProductCategory { ProductCategoryID = x.ProductCategoryID, ProductCategoryTitle = x.ProductCategoryTitle })
                .ToList();
            if (categories != null)
            {
                ddlProductcategory.DataSource = categories;
                ddlProductcategory.DataTextField = "ProductCategoryTitle";
                ddlProductcategory.DataValueField = "ProductCategoryID";
                ddlProductcategory.DataBind();
                string selectText = ValidationHelper.GetString(ResHelper.GetString("Kadena.CampaignProduct.SelectCategoryText"), string.Empty);
                ddlProductcategory.Items.Insert(0, new ListItem(selectText, "0"));
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "BindCategories", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// filter data by category id
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void ddlProductcategory_SelectedIndexChanged(object sender, EventArgs e)
    {
        SetFilter();
    }

    /// <summary>
    /// filter data by brogram id
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void ddlPrograms_SelectedIndexChanged(object sender, EventArgs e)
    {
        SetFilter();
    }

    /// <summary>
    /// Nottify Admin
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void btnNotifyAdmin_Click(object sender, EventArgs e)
    {
        try
        {
            var nodeGuid = CurrentDocument.NodeGUID;
            Campaign campaign = CampaignProvider.GetCampaign(nodeGuid, CurrentDocument.DocumentCulture, CurrentSite.SiteName);
            if (campaign != null)
            {
                campaign.GlobalAdminNotified = true;
                campaign.Update();
                var roleName = SettingsKeyInfoProvider.GetValue(CurrentSite.SiteName + ".KDA_GlobalAminRoleName");
                var role = RoleInfoProvider.GetRoleInfo(roleName, CurrentSite.SiteID);
                if (role != null)
                {
                    var users = RoleInfoProvider.GetRoleUsers(role.RoleID);
                    if (users != null)
                    {
                        foreach (var user in users.AsEnumerable().ToList())
                        {
                            ProductEmailNotifications.CampaignEmail(campaign.DocumentName, user.Field<string>("Email"), "ProductsAddedToCampaign");
                        }
                    }
                }
                Response.Redirect(CurrentDocument.DocumentUrlPath);
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "btnNotifyAdmin_Click", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// Allow the Products updates
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void btnAllowUpates_Click(object sender, EventArgs e)
    {
        try
        {
            var nodeGuid = CurrentDocument.NodeGUID;
            Campaign campaign = CampaignProvider.GetCampaign(nodeGuid, CurrentDocument.DocumentCulture, CurrentSite.SiteName);
            if (campaign != null)
            {
                campaign.GlobalAdminNotified = false;
                campaign.Update();
                Response.Redirect(CurrentDocument.DocumentUrlPath);
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "btnAllowUpates_Click", ex, CurrentSite.SiteID, ex.Message);
        }
    }

    /// <summary>
    /// Adding the new product
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    protected void btnNewProduct_Click(object sender, EventArgs e)
    {
        try
        {
            Guid nodeGUID = ValidationHelper.GetGuid(SettingsKeyInfoProvider.GetValue(SiteContext.CurrentSiteName + ".KDA_ProductsPath"), Guid.Empty);
            {
                if (!nodeGUID.Equals(Guid.Empty))
                {
                    var document = new TreeProvider().SelectSingleNode(nodeGUID, CurrentDocument.DocumentCulture, CurrentSite.SiteName);
                    if (document != null)
                    {
                        Response.Redirect($"{document.DocumentUrlPath}?camp={CurrentDocument.NodeID}");
                    }
                }
            }
        }
        catch (Exception ex)
        {
            EventLogProvider.LogException("CMSWebParts_Kadena_Campaign_Web_Form_CampaignProductsFilter", "btnNewProduct_Click", ex, CurrentSite.SiteID, ex.Message);
        }
    }
}