using CustomersAPI.Service.Models.DB;
using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;

namespace CustomersAPI.Service.Services.DatabaseServices.MongoDB
{
    public interface IMongoDBService
    {
        public Task<CustomerResponse> Create(CustomerCreateDB customer);
        public Task<CustomerResponse> Update(string id, UpdateCustomerRequest customer);
        public Task<List<CustomerResponse>> GetAll();
        public Task<CustomerResponse> GetById(string id);

        public Task<CustomerResponse> Login(LoginCustomerRequest customer);

    }
}

