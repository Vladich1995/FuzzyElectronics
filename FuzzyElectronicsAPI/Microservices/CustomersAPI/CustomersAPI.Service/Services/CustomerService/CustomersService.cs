using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;
using CustomersAPI.Service.Services.DatabaseServices;
using CustomersAPI.Service.Services.EncryptionServices;
using CustomersAPI.Service.Models.Request.Extensions;

namespace CustomersAPI.Service.Services.CustomerService
{
    public class CustomersService : ICustomersService
    {
        private readonly IEncryptionService _encryptionService;
        private readonly IDBService _dbService;
        public CustomersService(IEncryptionService encryptionService, IDBService dBService) 
        { 
            _encryptionService = encryptionService;
            _dbService = dBService;
        }
        public async Task<CustomerResponse> HandleCreate(CreateCustomerRequest request)
        {
            var requestDB = CustomerRequestExtensions.MapToCustomerCreateDB(request, _encryptionService);
            return await _dbService.Create(requestDB);
        }

        public async Task<CustomerResponse> HandleUpdate(string id, UpdateCustomerRequest request)
        {
            return await _dbService.Update(id, request);
        }

        public async Task<List<CustomerResponse>> HandleGetAll()
        {
            return await _dbService.GetAll();
        }

        public async Task<CustomerResponse> HandleGetById(string id)
        {
            return await _dbService.GetById(id);
        }

        public async Task<CustomerResponse> HandleLogin(LoginCustomerRequest customer)
        {
            return await _dbService.Login(customer);
        }
    }
}
