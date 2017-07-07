﻿using AutomatedTests.PageObjects;
using AutomatedTests.Utilities;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace AutomatedTests.Tests
{
    class MailingListTests : BaseTest
    {
        [Test]
        public void When_UploadingMailingList_Expect_MailingListCorrectlyUploaded()
        {
            //login
            var login = new Login();
            login.Open();
            login.FillLogin(TestCustomer.Name, TestCustomer.Password);
            var dashboard = login.Submit();
            dashboard.WaitForKadenaPageLoad();

            //open K-list
            var kList = new KList();
            kList.Open();
            var newKList = kList.ClickAddMailingListBtn();

            //select mailing list and submit it
            newKList.SelectMailingList();
            string mailingListName = StringHelper.RandomString(7);
            newKList.FillOutMailingListName(mailingListName);
            var mapColumns = newKList.SubmitMailingList();

            //confirm mapping
            var listProcessing = mapColumns.ClickProcessList();

            //verify if the list is being processed
            Assert.True(listProcessing.WasMailingListSubmitted());

            //go back to K-List and check if the list is there
            kList.Open();
            Assert.IsTrue(kList.IsMailingListOnThePage(mailingListName));
            Assert.IsTrue(kList.WereAddressesValidated());
            var listDetail = kList.OpenFirstList();

            //verify if there are errors on list detail
            Assert.IsTrue(listDetail.AreThereBadAddresses());
            listDetail.UseOnlyCorrectAddresses();

            //verify that there are no bad addresses after using only good ones
            Assert.IsFalse(listDetail.AreThereBadAddresses());

            //go back to K-List and check if the page is updated
            kList.Open();
            Assert.IsFalse(kList.AreThereAnyErrorsInFirstList());
        }
    }
}
