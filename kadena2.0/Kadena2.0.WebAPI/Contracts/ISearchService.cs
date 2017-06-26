﻿using Kadena.WebAPI.Models.Search;
using System.Collections.Generic;

namespace Kadena.WebAPI.Contracts
{
    public interface ISearchService
    {
        AutocompleteResponse Autocomplete(string phrase, int results = 3);
        SearchResultPage Search(string phrase, int results = 100);
        List<ResultItemProduct> SearchProducts(string phrase, int results);
        List<ResultItemPage> SearchPages(string phrase, int results);
    }
}