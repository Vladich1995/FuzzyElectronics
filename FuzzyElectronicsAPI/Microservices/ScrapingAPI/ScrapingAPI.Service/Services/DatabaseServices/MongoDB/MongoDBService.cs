
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections;
using System.IO;
using System.Security.Authentication;
using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;
using ScrapingAPI.Service.Services.DatabaseServices.Exceptions;
using ScrapingAPI.Service.Services.EncryptionServices;
using static System.Net.WebRequestMethods;
using ScrapingAPI.Service.Models.Scraping.MergedPartModels;
using ScrapingAPI.Service.Models.DB;
using ScrapingAPI.Service.Models.DB.Extensions;

namespace ScrapingAPI.Service.Services.DatabaseServices.MongoDB
{
    public class MongoDBService : IMongoDBService
    {
        private readonly IMongoDatabase _database;
        private readonly IEncryptionService _EncryptionService;

        public MongoDBService(IEncryptionService EncryptionService)
        {
            var connectionString = Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING");
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("FuzzyElectronics");
            _EncryptionService = EncryptionService;
        }

        public async Task SaveObjectToDatabase<T>(T item, string collectionName)
        {
            try
            {
                var collection = _database.GetCollection<T>(collectionName);
                await collection.InsertOneAsync(item);
            } catch (Exception ex)
            {
                throw new DatabaseOperationException(ex.Message);
            }
        }

        public async Task DropCollections()
        {
                await _database.DropCollectionAsync("CapacityCollection");
                await _database.DropCollectionAsync("CasesCollection");
                await _database.DropCollectionAsync("CPUCollection");
                await _database.DropCollectionAsync("MBCollection");
                await _database.DropCollectionAsync("MemoryCollection");
                await _database.DropCollectionAsync("PCSystemCollection");
                await _database.DropCollectionAsync("PeripheralsCollection");
                await _database.DropCollectionAsync("PSUCollection");
                await _database.DropCollectionAsync("VGACollection");
                await _database.DropCollectionAsync("ItemsOnSaleCollection");
        }


        public async Task<ScrapingLoginResponse> SetScrapingCridentials(ScrapingLoginRequest model)
        {
            var filter = Builders<ScrapingLoginDB>.Filter.Eq("Username", model.Username);

            var existingUser = await _database.GetCollection<ScrapingLoginDB>("ScrapingCridentials")
                .Find(filter).FirstOrDefaultAsync();

            if (existingUser == null)
            {
                throw new Exception("User not found");
            }
            if (!string.IsNullOrEmpty(model.Password))
            {
                existingUser.Password = _EncryptionService.Encrypt(model.Password);
            }
            var replaceResult = await _database.GetCollection<ScrapingLoginDB>("ScrapingCridentials")
                .ReplaceOneAsync(filter, existingUser);

            var updatedModel = await _database.GetCollection<ScrapingLoginDB>("ScrapingCridentials")
                .Find(filter).FirstOrDefaultAsync();
            return ScrapingCridentialsExtensions.MapToScrapingLoginResponse(updatedModel, _EncryptionService);
        }

        public async Task<ScrapingLoginResponse> GetScrapingCridentials()
        {
            var cridentialsModel = await _database.GetCollection<ScrapingLoginDB>("ScrapingCridentials")
               .Find(_ => true).FirstOrDefaultAsync();
            if(cridentialsModel == null)
            {
                throw new KeyNotFoundException();
            }
            return ScrapingCridentialsExtensions.MapToScrapingLoginResponse(cridentialsModel, _EncryptionService);
        }
    }
}
