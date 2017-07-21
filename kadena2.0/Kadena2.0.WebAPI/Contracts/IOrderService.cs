﻿using Kadena.Models.OrderDetail;
using Kadena.Models.SubmitOrder;
using System.Threading.Tasks;

namespace Kadena.WebAPI.Contracts
{
    public interface IOrderService
    {
        Task<SubmitOrderResult> SubmitOrder(SubmitOrderRequest request);
			
        Task<OrderDetail> GetOrderDetail(string orderId);
    }
}