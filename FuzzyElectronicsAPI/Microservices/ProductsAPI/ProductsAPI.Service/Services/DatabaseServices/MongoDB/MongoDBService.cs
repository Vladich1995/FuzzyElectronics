using MongoDB.Bson.Serialization;
using MongoDB.Bson;
using MongoDB.Driver;
using ProductsAPI.Service.Models.Response.PartsDataResponse;
using ProductsAPI.Service.Services.EncryptionServices;
using ProductsAPI.Service.Models.StoredPartsData;
using ProductsAPI.Service.Models.Response.Extensions;
using ProductsAPI.Service.Models.Request.Build;
using ProductsAPI.Service.Models.Enums;
using ProductsAPI.Service.Models.Response.Build;
using ProductsAPI.Service.Models.Request.Build.Verification;
using System.Reflection;
using System.Collections;

namespace ProductsAPI.Service.Services.DatabaseServices.MongoDB
{
    public class MongoDBService : IMongoDBService
    {
        private readonly IMongoDatabase _database;
        public MongoDBService(IEncryptionService encryptionService)
        {
            var connectionString = Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING");
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("FuzzyElectronics");
        }

        public async Task<List<CapacityDataResponse>> GetCapacityPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<CapacityData>.Filter.Empty;
            var collection = _database.GetCollection<CapacityData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<CapacityDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseCapacity(part));
            }
            return responseList;
        }
        public async Task<List<CasesDataResponse>> GetCasesPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<CasesData>.Filter.Empty;
            var collection = _database.GetCollection<CasesData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<CasesDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseCases(part));
            }
            return responseList;
        }
        public async Task<List<CPUDataResponse>> GetCPUPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<CPUData>.Filter.Empty;
            var collection = _database.GetCollection<CPUData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<CPUDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseCPU(part));
            }
            return responseList;
        }
        public async Task<List<MBDataResponse>> GetMBPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<MBData>.Filter.Empty;
            var collection = _database.GetCollection<MBData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<MBDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseMB(part));
            }
            return responseList;
        }
        public async Task<List<MemoryDataResponse>> GetMemoryPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<MemoryData>.Filter.Empty;
            var collection = _database.GetCollection<MemoryData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<MemoryDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseMemory(part));
            }
            return responseList;
        }
        public async Task<List<PCSystemDataResponse>> GetPCSystemPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<PCSystemData>.Filter.Empty;
            var collection = _database.GetCollection<PCSystemData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<PCSystemDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponsePCSystem(part));
            }
            return responseList;
        }
        public async Task<List<PeripheralsDataResponse>> GetPeripheralsPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<PeripheralsData>.Filter.Empty;
            var collection = _database.GetCollection<PeripheralsData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<PeripheralsDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponsePeripherals(part));
            }
            return responseList;
        }
        public async Task<List<PSUDataResponse>> GetPSUPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<PSUData>.Filter.Empty;
            var collection = _database.GetCollection<PSUData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<PSUDataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponsePSU(part));
            }
            return responseList;
        }
        public async Task<List<VGADataResponse>> GetVGAPaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<VGAData>.Filter.Empty;
            var collection = _database.GetCollection<VGAData>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();
            var responseList = new List<VGADataResponse>();
            foreach (var part in paginatedDocuments)
            {
                responseList.Add(ResponsePartsExtensions.MapToResponseVGA(part));
            }
            return responseList;
        }

        public async Task<List<BasePartDataResponse>> GetItemsOnSalePaginated(string collectionName, int skip, int pageSize)
        {
            var filter = Builders<BsonDocument>.Filter.Empty;
            var collection = _database.GetCollection<BsonDocument>(collectionName);

            var paginatedDocuments = await collection.Find(filter)
                .Skip(skip)
                .Limit(pageSize)
                .ToListAsync();

            var responseList = new List<BasePartDataResponse>();

            foreach (var document in paginatedDocuments)
            {
                try
                {
                    // Retrieve the _t field as an array of strings
                    var typeArray = document.GetValue("_t", new BsonArray());

                    foreach (var typeName in typeArray.AsBsonArray)
                    {
                        // Determine the type based on each typeName
                        switch (typeName.AsString)
                        {
                            case "MergedCapacityData":
                                CapacityData storedCapacity = BsonSerializer.Deserialize<CapacityData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseCapacity(storedCapacity));
                                break;
                            case "MergedCasesData":
                                CasesData storedCases = BsonSerializer.Deserialize<CasesData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseCases(storedCases));
                                break;
                            case "MergedCPUData":
                                CPUData storedCPU = BsonSerializer.Deserialize<CPUData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseCPU(storedCPU));
                                break;
                            case "MergedMBData":
                                MBData storedMB = BsonSerializer.Deserialize<MBData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseMB(storedMB));
                                break;
                            case "MergedMemoryData":
                                MemoryData storedMemory = BsonSerializer.Deserialize<MemoryData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseMemory(storedMemory));
                                break;
                            case "MergedPCSystemData":
                                PCSystemData storedPCSystem = BsonSerializer.Deserialize<PCSystemData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponsePCSystem(storedPCSystem));
                                break;
                            case "MergedPeripheralsData":
                                PeripheralsData storedPeripherals = BsonSerializer.Deserialize<PeripheralsData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponsePeripherals(storedPeripherals));
                                break;
                            case "MergedPSUData":
                                PSUData storedPSU = BsonSerializer.Deserialize<PSUData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponsePSU(storedPSU));
                                break;
                            case "MergedVGAData":
                                VGAData storedVGA = BsonSerializer.Deserialize<VGAData>(document);
                                responseList.Add(ResponsePartsExtensions.MapToResponseVGA(storedVGA));
                                break;
                            // Add cases for other types as needed...
                            default:
                                // Handle unknown or unsupported types as needed.
                                break;
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }

            return responseList;
        }

        public async Task CreateComputerBuild(ComputerBuildRequest build)
        {
            var collection = _database.GetCollection<ComputerBuildRequest>("ComputerBuildsCollection");
            await collection.InsertOneAsync(build);
        }

        public async Task<ComputerBuildResponse> GetComputerBuildByType(eBuildTypes type)
        {
            var collection = _database.GetCollection<ComputerBuildResponse>("ComputerBuildsCollection");
            var filter = Builders<ComputerBuildResponse>.Filter.Eq("BuildType", type);
            var responseBuild = await collection.Find(filter).FirstOrDefaultAsync();
            if(responseBuild == null)
            {
                throw new KeyNotFoundException();
            }
            return responseBuild;
        }

        public async Task<List<string>> VerifyProductExistance(Verification products)
        {
            Type verificationType = typeof(Verification);
            List <string> outOfStock = new List<string>();
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

        public async Task<BuildTypesResponse> GetAvailableBuildTypes()
        {
            var collection = _database.GetCollection<BuildTypesResponse>("NotCreatedBuildTypes");
            var filter = Builders<BuildTypesResponse>.Filter.Empty;
            var responseList = await collection.Find(filter).FirstOrDefaultAsync();
            if (responseList == null)
            {
                throw new KeyNotFoundException();
            }
            return responseList;
        }

        public async Task SubBuildTypes(eBuildTypes type)
        {
            var collection = _database.GetCollection<BuildTypesResponse>("NotCreatedBuildTypes");
            var filter = Builders<BuildTypesResponse>.Filter.Empty;
            var response = await collection.Find(filter).FirstOrDefaultAsync();
            response.BuildTypes.Remove(type.ToString());
            var update = Builders<BuildTypesResponse>.Update.Set(x => x.BuildTypes, response.BuildTypes);
            var updateResult = await collection.ReplaceOneAsync(filter, response);
        }

        public async Task AddBuildTypes(eBuildTypes type)
        {
            var collection = _database.GetCollection<BuildTypesResponse>("NotCreatedBuildTypes");
            var filter = Builders<BuildTypesResponse>.Filter.Empty;
            var response = await collection.Find(filter).FirstOrDefaultAsync();
            response.BuildTypes.Add(type.ToString());
            var update = Builders<BuildTypesResponse>.Update.Set(x => x.BuildTypes, response.BuildTypes);
            var updateResult = await collection.ReplaceOneAsync(filter, response);
        }
    }
}
