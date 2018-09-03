﻿using System;
using System.Linq;
using Kadena.BusinessLogic.Contracts;
using Kadena.Models;
using Kadena.WebAPI.KenticoProviders.Contracts;
using Kadena.Models.Product;
using System.Collections.Generic;
using Kadena.Models.AddToCart;
using Kadena.Models.CustomerData;
using Kadena.Models.ShoppingCarts;
using Kadena.Models.SiteSettings;

namespace Kadena.BusinessLogic.Services
{
    public class DistributorShoppingCartService : IDistributorShoppingCartService
    {
        private readonly IKenticoUserProvider kenticoUsers;
        private readonly IKenticoResourceService resources;
        private readonly IShoppingCartProvider shoppingCart;
        private readonly IKenticoAddressBookProvider addressBookProvider;
        private readonly IKenticoProductsProvider productsProvider;
        private readonly IProductsService productsService;
        private readonly IKenticoBusinessUnitsProvider businessUnitsProvider;
        private readonly IKenticoSkuProvider skus;

        public DistributorShoppingCartService(IKenticoUserProvider kenticoUsers,
                                              IKenticoResourceService resources,
                                              IShoppingCartProvider shoppingCart,
                                              IKenticoAddressBookProvider addressBookProvider,
                                              IKenticoProductsProvider productsProvider,
                                              IProductsService productsService,
                                              IKenticoBusinessUnitsProvider businessUnitsProvider,
                                              IKenticoSkuProvider skus)
        {
            this.kenticoUsers = kenticoUsers ?? throw new ArgumentNullException(nameof(kenticoUsers));
            this.resources = resources ?? throw new ArgumentNullException(nameof(resources));
            this.shoppingCart = shoppingCart ?? throw new ArgumentNullException(nameof(shoppingCart));
            this.addressBookProvider = addressBookProvider ?? throw new ArgumentNullException(nameof(addressBookProvider));
            this.productsProvider = productsProvider ?? throw new ArgumentNullException(nameof(productsProvider));
            this.productsService = productsService ?? throw new ArgumentNullException(nameof(productsService));
            this.businessUnitsProvider = businessUnitsProvider ?? throw new ArgumentNullException(nameof(businessUnitsProvider));
            this.skus = skus ?? throw new ArgumentNullException(nameof(skus));
        }

        public DistributorCart GetCartDistributorData(int skuID, CampaignProductType cartType = CampaignProductType.GeneralInventory)
        {
            var userId = kenticoUsers.GetCurrentUser().UserId;

            ValidateBusinessUnits(userId);
            ValidateSku(skuID, cartType);
            int availableQty = GetInventoryAvailableQuantity(skuID, cartType);
            if (availableQty == 0)
            {
                throw new Exception(resources.GetResourceString("Kadena.AddToCart.NoStockAvailableError"));
            }
            int allocatedQty = GetAllocatedQuantity(skuID, cartType, userId);
            if (allocatedQty == 0)
            {
                throw new Exception(resources.GetResourceString("KDA.Cart.Update.ProductNotAllocatedMessage"));
            }
            return new DistributorCart()
            {
                SKUID = skuID,
                CartType = cartType,
                AvailableQuantity = availableQty,
                AllocatedQuantity = allocatedQty,
                Items = GetDistributorCartItems(skuID, userId, cartType)
            };
        }

        private void ValidateBusinessUnits(int userId)
        {
            int businessUnitsCount = businessUnitsProvider.GetUserBusinessUnits(userId)?.Count ?? 0;
            if (businessUnitsCount == 0)
            {
                throw new Exception(resources.GetResourceString("Kadena.AddToCart.BusinessUnitError"));
            }
        }

        private void ValidateSku(int skuID, CampaignProductType cartType)
        {
            if (cartType == CampaignProductType.GeneralInventory && !productsService.ProductHasValidSKUNumber(skuID))
            {
                throw new Exception(resources.GetResourceString("KDA.Cart.InvalidProduct"));
            }
        }

        private int GetAllocatedQuantity(int skuID, CampaignProductType cartType, int userId)
        {
            if (cartType != CampaignProductType.GeneralInventory)
            {
                return -1;
            }

            return productsProvider.GetAllocatedProductQuantityForUser(skuID, userId);
        }

        private int GetInventoryAvailableQuantity(int skuID, CampaignProductType cartType)
        {
            return cartType == CampaignProductType.GeneralInventory
                ? skus.GetSkuAvailableQty(skuID)
                : -1;
        }

        public void ValidateItem(int skuId, int quantity, int userId)
        {
            var inventoryType = CampaignProductType.GeneralInventory;
            int availableQty = GetInventoryAvailableQuantity(skuId, inventoryType);
            if (availableQty > -1 && availableQty < quantity)
            {
                throw new Exception(resources.GetResourceString("Kadena.AddToCart.NoStockAvailableError"));
            }
            int allocatedQty = GetAllocatedQuantity(skuId, inventoryType, userId);
            if (allocatedQty > -1 && allocatedQty < quantity)
            {
                throw new Exception(resources.GetResourceString("KDA.Cart.Update.ProductNotAllocatedMessage"));
            }
        }

        private List<DistributorCartItem> GetDistributorCartItems(int skuID, int userId, CampaignProductType cartType = CampaignProductType.GeneralInventory)
        {
            CampaignsProduct product = productsProvider.GetCampaignProduct(skuID) ?? throw new Exception("Invalid product");

            List<AddressData> distributors = addressBookProvider.GetAddressesListByUserID(userId, (int)cartType, product.CampaignID);
            return distributors.Select(x =>
            {
                return CreateDistributorCartItem(x.DistributorShoppingCartID, x.AddressID, shoppingCart.GetItemQuantity(skuID, x.DistributorShoppingCartID));
            }).ToList();
        }

        private DistributorCartItem CreateDistributorCartItem(int cartId, int addressId, int quantity)
        {
            return new DistributorCartItem()
            {
                DistributorID = addressId,
                ShoppingCartID = cartId,
                Quantity = quantity
            };
        }

        public int UpdateDistributorCarts(DistributorCart cartDistributorData, int userId = 0)
        {
            if (userId < 1)
            {
                userId = kenticoUsers.GetCurrentUser().UserId;
            }

            if ((cartDistributorData?.Items.Count ?? 0) <= 0)
            {
                throw new Exception("Invalid request");
            }
            CampaignsProduct product = productsProvider.GetCampaignProduct(cartDistributorData.SKUID) ?? throw new Exception("Invalid product");

            cartDistributorData
                .Items
                .ForEach(x =>
                {
                    if (x.ShoppingCartID.Equals(default(int)) && x.Quantity > 0)
                    {
                        CreateDistributorCart(x, product, userId, cartDistributorData.CartType);
                    }
                    if (x.ShoppingCartID > 0 && x.Quantity > 0)
                    {
                        shoppingCart.UpdateDistributorCart(x, product, cartDistributorData.CartType);
                    }
                    if (x.ShoppingCartID > 0 && x.Quantity == 0)
                    {
                        shoppingCart.DeleteDistributorCartItem(x.ShoppingCartID, cartDistributorData.SKUID);
                    }
                });

            return shoppingCart.GetDistributorCartCount(userId, product.CampaignID, cartDistributorData.CartType);
        }

        private void CreateDistributorCart(DistributorCartItem distributorCartItem, CampaignsProduct product, int userId,
            CampaignProductType inventoryType)
        {
            var shippingOptionName = resources.GetSiteSettingsKey(Settings.KDA_DefaultShipppingOption);
            var shippingOption = shoppingCart.GetShippingOption(shippingOptionName);

            var cart = new ShoppingCart
            {
                CampaignId = product.CampaignID,
                DistributorId = distributorCartItem.DistributorID,
                CustomerId = distributorCartItem.DistributorID,
                UserId = userId,
                Type = inventoryType,
                ProgramId = product.ProgramID,
                ShippingOptionId = shippingOption.Id,
                Address = new DeliveryAddress { Id = distributorCartItem.DistributorID }
            };

            int cartID = shoppingCart.SaveCart(cart);
            shoppingCart.AddDistributorCartItem(cartID, distributorCartItem, product, inventoryType);
        }

        public string UpdateCartQuantity(Distributor submitRequest)
        {
            // TODO : move logic from provider to here
            return shoppingCart.UpdateCartQuantity(submitRequest);
        }
    }
}
