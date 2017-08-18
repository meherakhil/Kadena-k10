﻿using CMS.Base.Web.UI;
using CMS.DocumentEngine;
using CMS.Ecommerce;
using CMS.EventLog;
using CMS.Helpers;
using CMS.Localization;
using CMS.Membership;
using CMS.PortalEngine.Web.UI;
using Kadena.Dto.MailingList.MicroserviceResponses;
using Kadena.Old_App_Code.Helpers;
using Kadena.Old_App_Code.Kadena.DynamicPricing;
using Kadena2.MicroserviceClients.Clients;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Script.Serialization;
using System.Threading.Tasks;
using CMS.DataEngine;
using CMS.SiteProvider;
using System.IO;
using System.Web.UI;

namespace Kadena.CMSWebParts.Kadena.Chili
{
    public partial class AddToCartExtended : CMSAbstractWebPart
    {
        public override void OnContentLoaded()
        {
            base.OnContentLoaded();
            SetupControl();
        }

        private ShoppingCartItemInfo CurrentShoppingCartItem { get; set; }

        private TreeNode ReferencedDocument { get; set; }

        private bool IsProductMailingType()
        {
            return GetProductType().Contains("KDA.MailingProduct");
        }

        protected void SetupControl()
        {
            if (!StopProcessing)
            {
                SetupDocument();
                InitializeCurrentShoppingCartItem();

                if (IsProductMailingType())
                {
                    inpNumberOfItems.Attributes.Add("disabled", "true");
                    inpNumberOfItems.Value = Request.QueryString["quantity"];
                }
                else
                {
                    if (CurrentShoppingCartItem != null)
                    {
                        inpNumberOfItems.Value = CurrentShoppingCartItem.CartItemUnits.ToString();
                    }
                }

                Controls.Add(new LiteralControl(GetHiddenInput("documentId", Request.QueryString["documentId"])));
                Controls.Add(new LiteralControl(GetHiddenInput("templateId", Request.QueryString["templateId"])));
                if (!string.IsNullOrWhiteSpace(Request.QueryString["containerId"]))
                {
                    Controls.Add(new LiteralControl(GetHiddenInput("containerId", Request.QueryString["containerId"])));
                }
            }
        }

        private void InitializeCurrentShoppingCartItem()
        {
            if (ReferencedDocument != null)
            {
                CurrentShoppingCartItem = ShoppingCartItemInfoProvider.GetShoppingCartItems().
                    WhereEquals("SKUID", ReferencedDocument.NodeSKUID).
                    WhereEquals("ShoppingCartID", ECommerceContext.CurrentShoppingCart.ShoppingCartID).FirstObject;
            }
        }

        private string GetProductType()
        {
            string productType = string.Empty;

            if (ReferencedDocument != null)
            {
                productType = ReferencedDocument.GetStringValue("ProductType", string.Empty);
            }

            return productType;
        }

        private void SetupDocument()
        {
            int documentId;

            if (int.TryParse(Request.QueryString["documentId"], out documentId))
            {
                ReferencedDocument = DocumentHelper.GetDocument(documentId, new TreeProvider(MembershipContext.AuthenticatedUser));
            }

        }

        private static string GetHiddenInput(string name, string value)
        {
            using (var stringWriter = new StringWriter())
            {
                using (var html = new HtmlTextWriter(stringWriter))
                {
                    html.AddAttribute(HtmlTextWriterAttribute.Class, "js-add-to-cart-property");
                    html.AddAttribute(HtmlTextWriterAttribute.Name, name);
                    html.AddAttribute(HtmlTextWriterAttribute.Value, value);
                    html.AddAttribute(HtmlTextWriterAttribute.Type, "hidden");
                    html.RenderBeginTag(HtmlTextWriterTag.Input);
                    html.RenderEndTag();
                    return stringWriter.ToString();
                }
            }
        }

    }
}