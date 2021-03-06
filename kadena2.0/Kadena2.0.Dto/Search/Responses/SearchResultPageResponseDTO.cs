﻿using System.Collections.Generic;

namespace Kadena.Dto.Search.Responses
{
    public class SearchResultPageResponseDTO
    {
        public string NoResultMessage { get; set; }
        public IList<ProductDTO> Products { get; set; }
        public IList<PageDTO> Pages { get; set; }
    }
}
