using MongoDB.Driver;
using CustomersAPI.Service.Models.DB;
using System.Runtime.CompilerServices;
using CustomersAPI.Service.Services.EncryptionServices;

namespace CustomersAPI.Service.Models.Request.Extensions
{
    public static class CustomerRequestExtensions
    {
        public static CustomerCreateDB MapToCustomerCreateDB(this CreateCustomerRequest model, IEncryptionService encryptionService)
        {
            return new CustomerCreateDB
            {
                PublicId = Guid.NewGuid().ToString(),
                Fname = model.Fname,
                Lname = model.Lname,
                PhoneNumber = model.PhoneNumber,
                Email = model.Email,
                Password = encryptionService.Encrypt(model.Password),
            };
        }
    }
}
