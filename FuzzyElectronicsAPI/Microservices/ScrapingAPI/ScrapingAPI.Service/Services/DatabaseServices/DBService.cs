using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;
using ScrapingAPI.Service.Services.DatabaseServices.Exceptions;
using ScrapingAPI.Service.Services.DatabaseServices.MongoDB;

namespace ScrapingAPI.Service.Services.DatabaseServices
{
    public class DBService : IDBService
    {
        private readonly IMongoDBService _DBService;

        public DBService(IMongoDBService DBService)
        {
            _DBService = DBService;
        }

        /// <summary>
        /// Saves any object to any DB collection needed
        /// </summary>

        public async Task SaveObjectToDatabase<T>(T item, string collectionName)
        {
            try
            {
                await _DBService.SaveObjectToDatabase<T>(item, collectionName);
            } catch (Exception ex)
            {
                throw new DatabaseOperationException("Error saving product to database collection");
            }
        }

        /// <summary>
        /// Drops all product data collections
        /// </summary>

        public async Task DropCollections()
        {
            try
            {
                await _DBService.DropCollections();
            } catch (Exception ex) 
            {
                throw new DatabaseOperationException("Error dropping collections");
            }
        }


        public async Task<ScrapingLoginResponse> SetScrapingCridentials(ScrapingLoginRequest model)
        {
            try
            {
                return await _DBService.SetScrapingCridentials(model);
            } catch (Exception ex)
            {
               throw new DatabaseOperationException("Error setting scraping cridentials");
            }
        }

        public async  Task<ScrapingLoginResponse> GetScrapingCridentials()
        {
            try
            {
                return await _DBService.GetScrapingCridentials();
            } catch (Exception ex)
            {
                throw new DatabaseOperationException("Error getting scraping cridentials");
            }
        }
    }
}
