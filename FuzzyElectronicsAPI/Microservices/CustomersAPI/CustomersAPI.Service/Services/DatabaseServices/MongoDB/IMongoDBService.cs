using CustomersAPI.Service.Models.DB;
using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;

namespace CustomersAPI.Service.Services.DatabaseServices.MongoDB
{
    public interface IMongoDBService
    {
        public Task<LoginCustomerResponse> Create(CustomerCreateDB customer);
        public Task<LoginCustomerResponse> Update(string id, UpdateCustomerRequest customer);
        public Task<List<LoginCustomerResponse>> GetAll();
        public Task<LoginCustomerResponse> GetById(string id);

    }
}

