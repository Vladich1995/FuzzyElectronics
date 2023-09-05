
using CustomersAPI.Service.Models.DB;
using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;

namespace CustomersAPI.Service.Services.DatabaseServices
{
    public interface IDBService
    {
        public Task<LoginCustomerResponse> Create(CustomerCreateDB customer);
        public Task<LoginCustomerResponse> Update(string id, UpdateCustomerRequest customer);
        public Task<List<LoginCustomerResponse>> GetAll();
        public Task<LoginCustomerResponse> GetById(string id);
    }
}
