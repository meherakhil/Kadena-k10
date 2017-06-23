﻿using Kadena.Dto.SubmitOrder.MicroserviceRequests;
using Kadena2.MicroserviceClients.Clients.Base;
using Kadena2.MicroserviceClients.Contracts;
using Kadena2.MicroserviceClients.MicroserviceResponses;
using System.Net.Http;
using System.Threading.Tasks;

namespace Kadena2.MicroserviceClients.Clients
{
    public class OrderSubmitClient : ClientBase, IOrderSubmitClient
    {
        public async Task<SubmitOrderServiceResponseDto> SubmitOrder(string serviceEndpoint, OrderDTO orderData)
        {
            using (var httpClient = new HttpClient())
            {
                var content = CreateRequestContent(orderData);
                var response = await httpClient.PostAsync(serviceEndpoint, content);

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    return await ReadResponseJson<SubmitOrderServiceResponseDto>(response);
                }
                else
                {
                    return new SubmitOrderServiceResponseDto()
                    {
                        Success = false,
                        Error = new SubmitOrderErrorDto()
                        {
                            Message = $"HTTP error - {response.StatusCode}",
                        },
                        Payload = null
                    };
                }
            }
        }
    }
}
