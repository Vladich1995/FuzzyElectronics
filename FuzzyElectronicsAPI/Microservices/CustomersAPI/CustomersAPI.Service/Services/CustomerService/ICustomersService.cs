using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;

namespace CustomersAPI.Service.Services.CustomerService
{
    public interface ICustomersService
    {
        public Task<CustomerResponse> HandleCreate(CreateCustomerRequest request);

        public Task<CustomerResponse> HandleUpdate(string id, UpdateCustomerRequest request);

        public Task<List<CustomerResponse>> HandleGetAll();

        public Task<CustomerResponse> HandleGetById(string id);

        public Task<CustomerResponse> HandleLogin(LoginCustomerRequest customer);
    }
}
