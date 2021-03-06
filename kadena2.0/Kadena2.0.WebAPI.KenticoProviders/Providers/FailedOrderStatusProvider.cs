﻿using CMS.CustomTables;
using CMS.DataEngine;
using Kadena.WebAPI.KenticoProviders.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kadena.WebAPI.KenticoProviders.Providers
{
    public class FailedOrderStatusProvider : IFailedOrderStatusProvider
    {
        private readonly string customTableClassName = "KDA.FailedOrders";
        public void InsertCampaignOrdersInProgress(int campaignID)
        {
            DataClassInfo customTable = DataClassInfoProvider.GetDataClassInfo(customTableClassName);
            if (customTable != null)
            {
                CustomTableItem newCustomTableItem = CustomTableItem.New(customTableClassName);
                newCustomTableItem.SetValue("CampaignID", campaignID);
                newCustomTableItem.SetValue("IsCampaignOrdersInProgress", true);
                newCustomTableItem.SetValue("IsCampaignOrdersFailed", false);
                newCustomTableItem.Insert();
            }
        }
        public void UpdateCampaignOrderStatus(int campaignID)
        {
            DataClassInfo customTable = DataClassInfoProvider.GetDataClassInfo(customTableClassName);
            if (customTable != null)
            {
                var customTableData = CustomTableItemProvider.GetItems(customTableClassName)
                                                                    .WhereEquals("CampaignID", campaignID).FirstOrDefault();
                if (customTableData != null)
                {
                    customTableData.SetValue("IsCampaignOrdersInProgress", true);
                    customTableData.SetValue("IsCampaignOrdersFailed", false);
                }
            }
        }
        public bool GetCampaignOrderStatus(int campaignID)
        {
            DataClassInfo customTable = DataClassInfoProvider.GetDataClassInfo(customTableClassName);
            if (customTable != null)
            {
                return CustomTableItemProvider.GetItems(customTableClassName)
                                                                     .WhereEquals("CampaignID", campaignID).Any();
            }
            return false;
        }
        public void UpdatetFailedOrders(int campaignID, bool isFailed)
        {
            DataClassInfo customTable = DataClassInfoProvider.GetDataClassInfo(customTableClassName);
            if (customTable != null)
            {
                var customTableData = CustomTableItemProvider.GetItems(customTableClassName)
                                                                    .WhereEquals("CampaignID", campaignID).FirstOrDefault();
                if (customTableData != null)
                {
                    customTableData.SetValue("IsCampaignOrdersInProgress", false);
                    customTableData.SetValue("IsCampaignOrdersFailed", isFailed);
                }
            }
        }
    }
}
