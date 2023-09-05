
using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;

namespace ScrapingAPI.Service.Services.DatabaseServices.MongoDB
{
    public interface IMongoDBService
    {
        public Task SaveObjectToDatabase<T>(T item, string collectionName);
        public Task DropCollections();
        public Task<ScrapingLoginResponse> SetScrapingCridentials(ScrapingLoginRequest model);
        public Task<ScrapingLoginResponse> GetScrapingCridentials();

    }
}

