using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;

namespace CustomersAPI.Service.Services.CustomerService
{
    public interface ICustomersService
    {
        public Task<LoginCustomerResponse> HandleCreate(CreateCustomerRequest request);

        public Task<LoginCustomerResponse> HandleUpdate(string id, UpdateCustomerRequest request);

        public Task<List<LoginCustomerResponse>> HandleGetAll();

        public Task<LoginCustomerResponse> HandleGetById(string id);
    }
}
