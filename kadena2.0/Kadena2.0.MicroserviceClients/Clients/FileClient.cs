﻿using Kadena2.MicroserviceClients.Contracts;
using System.Threading.Tasks;
using Kadena.Dto.General;
using System.IO;
using System.Web;
using Kadena2.MicroserviceClients.Clients.Base;
using System.Net.Http;
using Kadena.KOrder.PaymentService.Infrastucture.Helpers;

namespace Kadena2.MicroserviceClients.Clients
{
    public class FileClient : ClientBase, IFileClient
    {
        //public FileClient() : base()
        //{

        //}

        //public FileClient(IAwsV4Signer signer) : base(signer)
        //{

        //}

        public string GetFileUrl(string serviceEndpoint, string fileName, FileModule moduleName)
        {
            return $"{serviceEndpoint}/api/File/GetFileStreamBy?key={HttpUtility.UrlEncode(fileName)}&module={moduleName}";
        }

        public async Task<BaseResponseDto<string>> UploadToS3(string serviceEndpoint, string siteName, FileFolder folderName,
            FileModule moduleName, Stream fileStream, string fileName)
        {
            var url = $"{serviceEndpoint}/api/File";
            using (var client = new HttpClient())
            {
                using (var content = new MultipartFormDataContent())
                {
                    fileStream.Seek(0, SeekOrigin.Begin);
                    content.Add(new StreamContent(fileStream), "file", fileName);
                    content.Add(new StringContent(folderName.ToString()), "ConsumerDetails.BucketType");
                    content.Add(new StringContent(siteName), "ConsumerDetails.CustomerName");
                    content.Add(new StringContent(moduleName.ToString()), "ConsumerDetails.Module");
                    using (var message = await client.PostAsync(url, content).ConfigureAwait(false))
                    {
                        return await ReadResponseJson<string>(message).ConfigureAwait(false);
                    }
                }
            }
        }
    }
}
