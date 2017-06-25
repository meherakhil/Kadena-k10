﻿using Kadena.WebAPI.Contracts;
using AutoMapper;
using CMS.Helpers;
using System;
using CMS.Membership;
using CMS.Search;
using CMS.Localization;
using System.Data;
using System.Collections.Generic;

namespace Kadena.WebAPI.Services
{
    public class KenticoSearchService : IKenticoSearchService
    {
        private readonly IMapper mapper;
        private readonly IKenticoResourceService resources;

        public KenticoSearchService(IMapper mapper, IKenticoResourceService resources)
        {
            this.mapper = mapper;
            this.resources = resources;
        }

        public IEnumerable<DataRow> Search(string phrase, string indexName, string path, bool checkPermissions)
        {
            var index = SearchIndexInfoProvider.GetSearchIndexInfo(indexName);

            if (index == null)
                yield break;
            
            SearchParameters parameters = new SearchParameters()
            {
                SearchFor = String.Format("+({0})", phrase),
                SearchSort = "##SCORE##",
                Path = path,
                CurrentCulture = LocalizationContext.CurrentCulture.CultureCode,
                DefaultCulture = null,
                CombineWithDefaultCulture = false,
                CheckPermissions = checkPermissions,
                SearchInAttachments = false,
                User = (UserInfo)MembershipContext.AuthenticatedUser,
                SearchIndexes = index.IndexName,
                StartingPosition = 0,
                DisplayResults = 3,
                NumberOfProcessedResults = 5000,
                NumberOfResults = 3,
                AttachmentWhere = String.Empty,
                AttachmentOrderBy = String.Empty,
            };

            var dataset = CacheHelper.Cache<DataSet>(() => SearchHelper.Search(parameters), new CacheSettings(1, $"search|{indexName}|{path}|{phrase}"));

            if (dataset != null)
            {
                foreach (DataTable table in dataset.Tables)
                {
                    foreach (DataRow dr in table.Rows)
                    {
                        yield return dr;
                    }
                }
            }
        }
    }
}
