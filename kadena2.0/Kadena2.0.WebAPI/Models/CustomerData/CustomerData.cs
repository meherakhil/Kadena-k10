﻿namespace Kadena.WebAPI.Models.CustomerData
{
    public class CustomerData
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public CustomerAddress Address { get; set; }
    }
}