using MongoDB.Driver;
using CustomersAPI.Service.Models.DB;
using System.Runtime.CompilerServices;
using CustomersAPI.Service.Services.EncryptionServices;

namespace CustomersAPI.Service.Models.Response.Extensions
{
    public static class CustomerResponseExtensions
    {
        public static CustomerResponse MapToLoginCustomerResponse(this CustomerCreateDB model, IEncryptionService encryptionService)
        {
            return new CustomerResponse
            {
                Id = model.PublicId,
                Fname = model.Fname,
                Lname = model.Lname,
                PhoneNumber = model.PhoneNumber,
                Email = model.Email,
            };
        }
    }
}
