﻿using System.Collections.Generic;

namespace Kadena.Models.SubmitOrder
{
    public class SubmitOrderRequest
    {
        public DeliveryAddress DeliveryAddress { get; set; }
        public int DeliveryMethod { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public bool AgreeWithTandC { get; set; }
        public IEnumerable<string> EmailConfirmation { get; set; }
    }
}