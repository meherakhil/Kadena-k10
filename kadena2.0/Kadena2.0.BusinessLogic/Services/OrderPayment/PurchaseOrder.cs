﻿using Kadena.BusinessLogic.Factories;
using Kadena.Models.SubmitOrder;
using Kadena.WebAPI.KenticoProviders.Contracts;
using Kadena2.BusinessLogic.Contracts.Orders;
using Kadena2.BusinessLogic.Contracts.OrderPayment;
using System;
using System.Threading.Tasks;

namespace Kadena2.BusinessLogic.Services.OrderPayment
{
    public class PurchaseOrder : IPurchaseOrder
    {
        private readonly IShoppingCartProvider shoppingCart;
        private readonly ISendSubmitOrder sendOrder;
        private readonly IGetOrderDataService orderDataProvider;
        private readonly IOrderResultPageUrlFactory resultUrlFactory;

        public PurchaseOrder(IShoppingCartProvider shoppingCart, ISendSubmitOrder sendOrder, IGetOrderDataService orderDataProvider, IOrderResultPageUrlFactory resultUrlFactory)
        {
            this.shoppingCart = shoppingCart ?? throw new ArgumentNullException(nameof(shoppingCart));
            this.sendOrder = sendOrder ?? throw new ArgumentNullException(nameof(sendOrder));
            this.orderDataProvider = orderDataProvider ?? throw new ArgumentNullException(nameof(orderDataProvider));
            this.resultUrlFactory = resultUrlFactory ?? throw new ArgumentNullException(nameof(resultUrlFactory));
        }

        public async Task<SubmitOrderResult> SubmitPOOrder(SubmitOrderRequest request)
        {
            var orderData = await orderDataProvider.GetSubmitOrderData(request);
            var serviceResult = new SubmitOrderResult
            {
                Success = true,
                OrderId = "ShoppingCart",
            };//await sendOrder.SubmitOrderData(orderData);

            if (serviceResult.Success)
            {
                //shoppingCart.RemoveCurrentItemsFromStock();
                //shoppingCart.ClearCart();
                shoppingCart.ClearCurrent();
            }

            serviceResult.RedirectURL = resultUrlFactory.GetOrderResultPageUrl(serviceResult);

            return serviceResult;
        }
    }
}
