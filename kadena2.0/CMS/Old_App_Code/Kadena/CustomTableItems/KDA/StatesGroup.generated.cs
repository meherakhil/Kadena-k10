//--------------------------------------------------------------------------------------------------
// <auto-generated>
//
//     This code was generated by code generator tool.
//
//     To customize the code use your own partial class. For more info about how to use and customize
//     the generated code see the documentation at http://docs.kentico.com.
//
// </auto-generated>
//--------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

using CMS;
using CMS.Base;
using CMS.Helpers;
using CMS.DataEngine;
using CMS.CustomTables.Types.KDA;
using CMS.CustomTables;

[assembly: RegisterCustomTable(StatesGroupItem.CLASS_NAME, typeof(StatesGroupItem))]

namespace CMS.CustomTables.Types.KDA
{
	/// <summary>
	/// Represents a content item of type StatesGroupItem.
	/// </summary>
	public partial class StatesGroupItem : CustomTableItem
	{
		#region "Constants and variables"

		/// <summary>
		/// The name of the data class.
		/// </summary>
		public const string CLASS_NAME = "KDA.StatesGroup";


		/// <summary>
		/// The instance of the class that provides extended API for working with StatesGroupItem fields.
		/// </summary>
		private readonly StatesGroupItemFields mFields;

		#endregion


		#region "Properties"

		/// <summary>
		/// Select States.
		/// </summary>
		[DatabaseField]
		public string States
		{
			get
			{
				return ValidationHelper.GetString(GetValue("States"), "");
			}
			set
			{
				SetValue("States", value);
			}
		}


		/// <summary>
		/// Group Name.
		/// </summary>
		[DatabaseField]
		public string GroupName
		{
			get
			{
				return ValidationHelper.GetString(GetValue("GroupName"), "");
			}
			set
			{
				SetValue("GroupName", value);
			}
		}


		/// <summary>
		/// Gets an object that provides extended API for working with StatesGroupItem fields.
		/// </summary>
		[RegisterProperty]
		public StatesGroupItemFields Fields
		{
			get
			{
				return mFields;
			}
		}


		/// <summary>
		/// Provides extended API for working with StatesGroupItem fields.
		/// </summary>
		[RegisterAllProperties]
		public partial class StatesGroupItemFields : AbstractHierarchicalObject<StatesGroupItemFields>
		{
			/// <summary>
			/// The content item of type StatesGroupItem that is a target of the extended API.
			/// </summary>
			private readonly StatesGroupItem mInstance;


			/// <summary>
			/// Initializes a new instance of the <see cref="StatesGroupItemFields" /> class with the specified content item of type StatesGroupItem.
			/// </summary>
			/// <param name="instance">The content item of type StatesGroupItem that is a target of the extended API.</param>
			public StatesGroupItemFields(StatesGroupItem instance)
			{
				mInstance = instance;
			}


			/// <summary>
			/// Select States.
			/// </summary>
			public string States
			{
				get
				{
					return mInstance.States;
				}
				set
				{
					mInstance.States = value;
				}
			}


			/// <summary>
			/// Group Name.
			/// </summary>
			public string GroupName
			{
				get
				{
					return mInstance.GroupName;
				}
				set
				{
					mInstance.GroupName = value;
				}
			}
		}

		#endregion


		#region "Constructors"

		/// <summary>
		/// Initializes a new instance of the <see cref="StatesGroupItem" /> class.
		/// </summary>
		public StatesGroupItem() : base(CLASS_NAME)
		{
			mFields = new StatesGroupItemFields(this);
		}

		#endregion
	}
}