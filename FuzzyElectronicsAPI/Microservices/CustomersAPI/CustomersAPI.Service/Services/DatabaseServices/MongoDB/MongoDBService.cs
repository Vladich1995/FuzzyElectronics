
using MongoDB.Driver;
using CustomersAPI.Service.Services.EncryptionServices;
using CustomersAPI.Service.Models.DB;
using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;
using CustomersAPI.Service.Models.Response.Extensions;
using CustomersAPI.Service.Services.DatabaseServices.Exceptions;

namespace CustomersAPI.Service.Services.DatabaseServices.MongoDB
{
    public class MongoDBService : IMongoDBService
    {
        private readonly IMongoDatabase _database;
        private readonly IEncryptionService _encryptionService;
        public MongoDBService(IEncryptionService encryptionService)
        {
            var connectionString = Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING");
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("FuzzyElectronics");
            _encryptionService = encryptionService;
        }

        public async Task<CustomerResponse> Create(CustomerCreateDB customer)
        {
            var collection = _database.GetCollection<CustomerCreateDB>("CustomersCollection");
            var filter = Builders<CustomerCreateDB>.Filter.Eq("Email", customer.Email);
            var responseCheck = await collection.Find(filter).FirstOrDefaultAsync();
            if(responseCheck != null)
            {
                throw new DuplicateEmailException("There is already a user with this email");
            }
            await collection.InsertOneAsync(customer);
            var responseDBmodel = await collection.Find(filter).FirstOrDefaultAsync();
            return CustomerResponseExtensions.MapToLoginCustomerResponse(responseDBmodel, _encryptionService);
        }
        public async Task<CustomerResponse> Update(string id, UpdateCustomerRequest customer)
        {
            var collection = _database.GetCollection<CustomerCreateDB>("CustomersCollection");
            var filter = Builders<CustomerCreateDB>.Filter.Eq("PublicId", id);
            var customerToUpdate = await collection.Find(filter).FirstOrDefaultAsync();
            if (customerToUpdate == null)
            {
                throw new KeyNotFoundException("Customer not found");
            }

            // Update user properties
            if (!string.IsNullOrEmpty(customer.Password))
            {
                customerToUpdate.Password = _encryptionService.Encrypt(customer.Password);
            }
            if (!string.IsNullOrEmpty(customer.PhoneNumber))
            {
                customerToUpdate.PhoneNumber = customer.PhoneNumber;
            }
            var replaceResult = await collection.ReplaceOneAsync(filter, customerToUpdate);

            var updatedCustomer = await collection.Find(filter).FirstOrDefaultAsync();

            return CustomerResponseExtensions.MapToLoginCustomerResponse(updatedCustomer, _encryptionService);
        }
        public async Task<List<CustomerResponse>> GetAll()
        {
            var collection = _database.GetCollection<CustomerCreateDB>("CustomersCollection");

            var filter = Builders<CustomerCreateDB>.Filter.Empty; // Empty filter to match all documents

            var customers = await collection.Find(filter).ToListAsync();
            var customersList = customers.Select(customer => CustomerResponseExtensions.MapToLoginCustomerResponse(customer, _encryptionService))
                .ToList();
            return customersList;
        }
        public async  Task<CustomerResponse> GetById(string id)
        {
            var collection = _database.GetCollection<CustomerCreateDB>("CustomersCollection");
            var filter = Builders<CustomerCreateDB>.Filter.Eq("PublicId", id);
            var customerDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (customerDB == null)
            {
                throw new KeyNotFoundException("Customer not found");
            }
            return CustomerResponseExtensions.MapToLoginCustomerResponse(customerDB, _encryptionService);
        }

        public async Task<CustomerResponse> Login(LoginCustomerRequest customer)
        {
            var collection = _database.GetCollection<CustomerCreateDB>("CustomersCollection");
            var filter = Builders<CustomerCreateDB>.Filter.Eq("Email", customer.Email);
            var customerDB = await collection.Find(filter).FirstOrDefaultAsync();
            if (customerDB == null)
            {
                throw new UnauthorizedAccessException("Wrong cridentials");
            }
            if(_encryptionService.Decrypt(customerDB.Password) == customer.Password)
            {
                return CustomerResponseExtensions.MapToLoginCustomerResponse(customerDB, _encryptionService);
            }
            else
            {
                throw new UnauthorizedAccessException("Wrong cridentials");
            }
        }
    }
}
