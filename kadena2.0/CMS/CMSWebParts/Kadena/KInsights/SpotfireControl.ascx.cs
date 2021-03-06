﻿using CMS.PortalEngine.Web.UI;
using System;

namespace Kadena.CMSWebParts.Kadena.KInsights
{
    public partial class SpotfireControl : CMSAbstractWebPart
    {
        public string Title
        {
            get { return GetStringValue("Title", string.Empty); }
        }

        public override void OnContentLoaded()
        {
            base.OnContentLoaded();
            SetupControl();
        }

        protected void SetupControl()
        {
            if (!StopProcessing)
            {
                ltSpotfire.Text = $@"<div class='col-lg-6'>
                                        <div id='spotfire-{Guid.NewGuid()}' data-doc='{Title}' class='spotfire__item js-spotfire-tab'>
                                            <div class='spinner'>
                                                <svg class='icon '>
                                                    <use xlink:href='/gfx/svg/sprites/icons.svg#spinner' />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>";
            }
        }
    }
}