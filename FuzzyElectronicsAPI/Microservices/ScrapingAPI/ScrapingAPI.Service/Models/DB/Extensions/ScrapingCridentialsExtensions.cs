using MongoDB.Driver;
using ScrapingAPI.Service.Models.DB;
using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;
using ScrapingAPI.Service.Services.EncryptionServices;
using System.Runtime.CompilerServices;

namespace ScrapingAPI.Service.Models.DB.Extensions
{
    public static class ScrapingCridentialsExtensions
    {
        public static ScrapingLoginResponse MapToScrapingLoginResponse(this ScrapingLoginDB model, IEncryptionService encryptionService)
        {
            return new ScrapingLoginResponse
            {
                Username = model.Username,
                Password = encryptionService.Decrypt(model.Password),
            };
        }
    }
}
