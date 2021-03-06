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

[assembly: RegisterCustomTable(AddressBrandsItem.CLASS_NAME, typeof(AddressBrandsItem))]

namespace CMS.CustomTables.Types.KDA
{
	/// <summary>
	/// Represents a content item of type AddressBrandsItem.
	/// </summary>
	public partial class AddressBrandsItem : CustomTableItem
	{
		#region "Constants and variables"

		/// <summary>
		/// The name of the data class.
		/// </summary>
		public const string CLASS_NAME = "KDA.AddressBrands";


		/// <summary>
		/// The instance of the class that provides extended API for working with AddressBrandsItem fields.
		/// </summary>
		private readonly AddressBrandsItemFields mFields;

		#endregion


		#region "Properties"

		/// <summary>
		/// Address ID.
		/// </summary>
		[DatabaseField]
		public int AddressID
		{
			get
			{
				return ValidationHelper.GetInteger(GetValue("AddressID"), 0);
			}
			set
			{
				SetValue("AddressID", value);
			}
		}


		/// <summary>
		/// Brand ID.
		/// </summary>
		[DatabaseField]
		public int BrandID
		{
			get
			{
				return ValidationHelper.GetInteger(GetValue("BrandID"), 0);
			}
			set
			{
				SetValue("BrandID", value);
			}
		}


		/// <summary>
		/// Gets an object that provides extended API for working with AddressBrandsItem fields.
		/// </summary>
		[RegisterProperty]
		public AddressBrandsItemFields Fields
		{
			get
			{
				return mFields;
			}
		}


		/// <summary>
		/// Provides extended API for working with AddressBrandsItem fields.
		/// </summary>
		[RegisterAllProperties]
		public partial class AddressBrandsItemFields : AbstractHierarchicalObject<AddressBrandsItemFields>
		{
			/// <summary>
			/// The content item of type AddressBrandsItem that is a target of the extended API.
			/// </summary>
			private readonly AddressBrandsItem mInstance;


			/// <summary>
			/// Initializes a new instance of the <see cref="AddressBrandsItemFields" /> class with the specified content item of type AddressBrandsItem.
			/// </summary>
			/// <param name="instance">The content item of type AddressBrandsItem that is a target of the extended API.</param>
			public AddressBrandsItemFields(AddressBrandsItem instance)
			{
				mInstance = instance;
			}


			/// <summary>
			/// Address ID.
			/// </summary>
			public int AddressID
			{
				get
				{
					return mInstance.AddressID;
				}
				set
				{
					mInstance.AddressID = value;
				}
			}


			/// <summary>
			/// Brand ID.
			/// </summary>
			public int BrandID
			{
				get
				{
					return mInstance.BrandID;
				}
				set
				{
					mInstance.BrandID = value;
				}
			}
		}

		#endregion


		#region "Constructors"

		/// <summary>
		/// Initializes a new instance of the <see cref="AddressBrandsItem" /> class.
		/// </summary>
		public AddressBrandsItem() : base(CLASS_NAME)
		{
			mFields = new AddressBrandsItemFields(this);
		}

		#endregion
	}
}