using MongoDB.Bson.Serialization;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Reflection;
using System.Collections;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Build.Verification;
using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Product;

namespace OrdersAPI.Service.Services.DatabaseServices.MongoDB
{
    public class MongoDBService : IMongoDBService
    {
        private readonly IMongoDatabase _database;
        public MongoDBService()
        {
            var connectionString = Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING");
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("FuzzyElectronics");
        }
        public async Task<List<string>> VerifyBuildProductExistance(BuildData products)
        {
            Type verificationType = typeof(BuildData);
            List<string> outOfStock = new List<string>();
            foreach (PropertyInfo propertyInfo in verificationType.GetProperties())
            {

                // Get the value of the list
                List<VerifyProductData> productList = (List<VerifyProductData>)propertyInfo.GetValue(products);

                // Iterate through the list
                foreach (VerifyProductData productData in productList)
                {
                    var collection = _database.GetCollection<BsonDocument>(productData.CollectionName);
                    var filter = Builders<BsonDocument>.Filter.Eq("MakatMorLevi", productData.MakatMorLevi);
                    var result = await collection.Find(filter).FirstOrDefaultAsync();
                    if (result == null)
                    {
                        outOfStock.Add(productData.MakatMorLevi);
                    }
                }
            }
            return outOfStock;
        }

        public async Task PlaceBuildOrderForConfirmation(OrderedBuildDB buildDB)
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            await collection.InsertOneAsync(buildDB);
        }

        public async Task<List<OrderedBuildDB>> GetBuildOrdersForConfirmation()
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Eq("IsConfirmed", false);
            var orders = await collection.Find(filter).ToListAsync();
            return orders;
        }

        public async Task ConfirmBuildOrderById(string id)
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Eq("PublicId", id);
            var orderDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (orderDB == null)
            {
                throw new KeyNotFoundException("Order not found");
            }
            orderDB.IsConfirmed = true;
            var replaceResult = await collection.ReplaceOneAsync(filter, orderDB);
        }

        public async Task<List<OrderedBuildDB>> GetAllBuildOrders(int skip, int pageSize)
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Empty; // Empty filter to match all documents
            var orders = await collection.Find(filter)
            .Skip(skip)
            .Limit(pageSize)
            .ToListAsync();
            return orders;
        }

        public async Task<OrderedBuildDB> GetBuildOrderById(string id)
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Eq("PublicId", id);
            var order = await collection.Find(filter).FirstOrDefaultAsync();
            return order;
        }

        public async Task<List<OrderedBuildDB>> GetSoldBuildOrders()
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Eq("IsSold", true);
            var orders = await collection.Find(filter).ToListAsync();
            return orders;
        }
        public async Task MarkBuildAsSold(string id)
        {
            var collection = _database.GetCollection<OrderedBuildDB>("OrderedBuilds");
            var filter = Builders<OrderedBuildDB>.Filter.Eq("PublicId", id);
            var orderDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (orderDB == null)
            {
                throw new KeyNotFoundException("Order not found");
            }
            orderDB.IsSold = true;
            var replaceResult = await collection.ReplaceOneAsync(filter, orderDB);
        }

        public async Task<bool> VerifySingleProductExistance(ProductData data)
        {
            var collection = _database.GetCollection<BsonDocument>(data.CollectionName);
            var filter = Builders<BsonDocument>.Filter.Eq("MakatMorLevi", data.MakatMorLevi);
            var result = await collection.Find(filter).FirstOrDefaultAsync();
            if (result == null)
            {
                return false;
            }
            return true;
        }
        public async Task PlaceProductOrderForConfirmation(OrderedProductDB productDB)
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            await collection.InsertOneAsync(productDB);
        }
        public async Task<List<OrderedProductDB>> GetProductOrdersForConfirmation()
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Eq("IsConfirmed", false);
            var orders = await collection.Find(filter).ToListAsync();
            return orders;
        }
        public async Task ConfirmProductOrderById(string id)
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Eq("PublicId", id);
            var orderDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (orderDB == null)
            {
                throw new KeyNotFoundException("Ordered product not found");
            }
            orderDB.IsConfirmed = true;
            var replaceResult = await collection.ReplaceOneAsync(filter, orderDB);
        }
        public async Task<List<OrderedProductDB>> GetAllProductOrders(int skip, int pageSize)
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Empty; // Empty filter to match all documents
            var orders = await collection.Find(filter)
            .Skip(skip)
            .Limit(pageSize)
            .ToListAsync();
            return orders;
        }
        public async Task<OrderedProductDB> GetProductOrderById(string id)
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Eq("PublicId", id);
            var order = await collection.Find(filter).FirstOrDefaultAsync();
            return order;
        }
        public async Task<List<OrderedProductDB>> GetSoldProductOrders()
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Eq("IsSold", true);
            var orders = await collection.Find(filter).ToListAsync();
            return orders;
        }
        public async Task MarkProductAsSold(string id)
        {
            var collection = _database.GetCollection<OrderedProductDB>("OrderedProducts");
            var filter = Builders<OrderedProductDB>.Filter.Eq("PublicId", id);
            var orderDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (orderDB == null)
            {
                throw new KeyNotFoundException("Order not found");
            }
            orderDB.IsSold = true;
            var replaceResult = await collection.ReplaceOneAsync(filter, orderDB);
        }
    }
}
