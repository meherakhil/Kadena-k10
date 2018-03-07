﻿using CMS.DocumentEngine;
using CMS.Localization;
using CMS.Membership;
using Kadena.WebAPI.KenticoProviders.Contracts;
using System;
using Kadena.Models.Login;
using CMS.Helpers;
using System.Web.Security;
using System.Web;
using CMS.SiteProvider;
using CMS.Activities.Loggers;
using Kadena2.WebAPI.KenticoProviders.Contracts.KadenaSettings;

namespace Kadena.WebAPI.KenticoProviders
{
    public class KenticoLoginProvider : IKenticoLoginProvider
    {
        private readonly IKenticoLogger logger;
        private readonly IKadenaSettings kadenaSettings;

        public KenticoLoginProvider(IKenticoLogger logger, IKadenaSettings kadenaSettings)
        {
            this.logger = logger;
            this.kadenaSettings = kadenaSettings;
        }

        public DateTime GetTaCValidFrom()
        {
            var tacNodeAliasPath = kadenaSettings.TermsAndConditionsPage;
            var tacDocument = DocumentHelper.GetDocuments("KDA.TermsAndConditions")
                .OnCurrentSite()
                .Path(tacNodeAliasPath)
                .Culture(LocalizationContext.CurrentUICulture.CultureCode)
                .FirstObject;

            if (tacDocument == null)
            {
                throw new Exception("Unable to find Terms and condition page");
            }

            return tacDocument.GetDateTimeValue("ValidFrom", DateTime.MinValue);
        }

        public bool CheckPasword(string mail, string password)
        {
            var user = UserInfoProvider.GetUserInfo(mail);

            if(user == null)
            {
                return false;
            }

            return !UserInfoProvider.IsUserPasswordDifferent(user, password);
       }

        public void AcceptTaC(string mail)
        {
            var user = UserInfoProvider.GetUserInfo(mail);
            user.SetValue("TermsConditionsAccepted", DateTime.Now);
            user.Update();
        }

        public LoginResult Login(LoginRequest loginRequest)
        {
            ChangeCookieExpiration(loginRequest.KeepLoggedIn);

            var user = AuthenticationHelper.AuthenticateUser(loginRequest.LoginEmail, loginRequest.Password, SiteContext.CurrentSiteName);

            if (user != null)
            {
                FormsAuthentication.SetAuthCookie(user.UserName, loginRequest.KeepLoggedIn);
                MembershipActivityLogger.LogLogin(user.UserName);
                return new LoginResult
                {
                    LogonSuccess = true
                };
            }
            else
            {
                return new LoginResult
                {
                    LogonSuccess = false,
                    ErrorPropertyName = "loginEmail",
                    ErrorMessage = ResHelper.GetString("Kadena.Logon.LogonFailed", LocalizationContext.CurrentCulture.CultureCode)
                };
            }
        }

        public bool SSOLogin(string username, bool keepLoggedIn = false)
        {
            ChangeCookieExpiration(keepLoggedIn);

            AuthenticationHelper.AuthenticateUser(username, createPersistentCookie: true, loadCultures: true);

            // by reflecting Kentico code, it seems that AuthenticateUser doesn't indicate failure
            // TODO when orchestrating SSO - verify this approach
            if (string.Equals(username,  MembershipContext.AuthenticatedUser?.UserName, StringComparison.InvariantCultureIgnoreCase))
            {
                FormsAuthentication.SetAuthCookie(username, keepLoggedIn);
                MembershipActivityLogger.LogLogin(username);
                return true;
            }

            return false;
        }

        private void ChangeCookieExpiration(bool keepLoggedIn)
        {
            DateTime extendedExpirationDate;
            CookieHelper.EnsureResponseCookie(FormsAuthentication.FormsCookieName);

            if (keepLoggedIn)
            {
                extendedExpirationDate = DateTime.Now.AddYears(1);
                CookieHelper.ChangeCookieExpiration(FormsAuthentication.FormsCookieName, extendedExpirationDate, false);
            }
            else
            {
                // Extend the expiration of the authentication cookie if required
                if (!AuthenticationHelper.UseSessionCookies && (HttpContext.Current != null) && (HttpContext.Current.Session != null))
                {
                    extendedExpirationDate = DateTime.Now.AddMinutes(HttpContext.Current.Session.Timeout);
                    CookieHelper.ChangeCookieExpiration(FormsAuthentication.FormsCookieName, extendedExpirationDate, false);
                }
            }
        }
    }
}