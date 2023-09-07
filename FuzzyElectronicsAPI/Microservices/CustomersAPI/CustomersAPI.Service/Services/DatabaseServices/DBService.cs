using CustomersAPI.Service.Models.DB;
using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Models.Response;
using CustomersAPI.Service.Services.DatabaseServices.Exceptions;
using CustomersAPI.Service.Services.DatabaseServices.MongoDB;

namespace CustomersAPI.Service.Services.DatabaseServices
{
    public class DBService : IDBService
    {
        private readonly IMongoDBService _DBService;

        public DBService(IMongoDBService DBService)
        {
            _DBService = DBService;
        }

        public async Task<CustomerResponse> Create(CustomerCreateDB customer)
        {
            try
            {

            } catch (Exception ex)
            {
                throw new DatabaseOperationException("Error creating new customer");
            }
            return await _DBService.Create(customer);
        }

        public async Task<CustomerResponse> Update(string id, UpdateCustomerRequest customer)
        {
            try
            {
                return await _DBService.Update(id, customer);
            }
            catch (Exception ex)
            {
                throw new DatabaseOperationException("Error updating existing customer");
            }
        }

        public async Task<List<CustomerResponse>> GetAll()
        {
            try
            {
                return await _DBService.GetAll();
            }
            catch (Exception ex)
            {
                throw new DatabaseOperationException("Error getting customers list");
            }
        }

        public async Task<CustomerResponse> GetById(string id)
        {
            try
            {
                return await _DBService.GetById(id);
            }
            catch (Exception ex)
            {
                throw new DatabaseOperationException("Error getting customer by id");
            }
        }

        public async Task<CustomerResponse> Login(LoginCustomerRequest customer)
        {
            return await _DBService.Login(customer);
        }
    }
}
