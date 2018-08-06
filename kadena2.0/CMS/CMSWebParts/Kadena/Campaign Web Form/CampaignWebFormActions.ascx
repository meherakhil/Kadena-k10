<%@ Control Language="C#" AutoEventWireup="true" Inherits="CMSWebParts_Kadena_Campaign_Web_Form_CampaignWebFormActions" CodeBehind="~/CMSWebParts/Kadena/Campaign Web Form/CampaignWebFormActions.ascx.cs" %>


<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#EditCampaignToolTipText %>' ID="lnkEdit" runat="server" OnClick="lnkEdit_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#InitiateCampaignToolTipText %>' ID="lnkInitiate" runat="server" OnClick="lnkInitiate_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#ViewProductsToolTipText %>' ID="lnkViewProducts" runat="server" OnClick="lnkViewProducts_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#UpdateProductsToolTipText %>' ID="lnkUpdateProducts" runat="server" OnClick="lnkUpdateProducts_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#OpenCampaignToolTipText %>' ID="lnkOpenCampaign" runat="server" OnClick="lnkOpenCampaign_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<asp:LinkButton class="js-tooltip" data-tooltip-placement="bottom" title='<%#CloseCampaignToolTipText %>' ID="lnkCloseCampaign" runat="server" OnClick="lnkCloseCampaign_Click" Visible="false" Enabled="false" CommandArgument='<%# CampaignID %>'></asp:LinkButton>
<cms:LocalizedLinkButton ResourceString="Kadena.Catalog.Download" CssClass="js-tooltip" ID="btnDownload" runat="server" CommandArgument="<%# CampaignID %>" OnClick="btnDownload_Click" />
