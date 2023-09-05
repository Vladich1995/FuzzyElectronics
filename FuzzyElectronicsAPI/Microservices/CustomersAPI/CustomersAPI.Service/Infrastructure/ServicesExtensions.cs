using CustomersAPI.Service.Services.CustomerService;
using CustomersAPI.Service.Services.DatabaseServices;
using CustomersAPI.Service.Services.DatabaseServices.MongoDB;
using CustomersAPI.Service.Services.EncryptionServices;
using Microsoft.Extensions.DependencyInjection;

namespace CustomersAPI.Service.Infrastructure
{
    public static class ServicesExtensions
    {
        /// <summary>
        /// Here all the required injection and services configurations will happen.
        /// </summary>
        public static IServiceCollection ConfigureServices(this IServiceCollection services)
        {
            services
                .AddShared()
                .AddCustomersServices();

            return services;
        }

        /// <summary>
        /// Injecting all the shared services.
        /// </summary>
        private static IServiceCollection AddShared(this IServiceCollection services)
        {

            return services;
        }

        /// <summary>
        /// Injecting all the services related to customer resource.
        /// </summary>
        private static IServiceCollection AddCustomersServices(this IServiceCollection services)
        {
            services.AddScoped<ICustomersService, CustomersService>();
            services.AddScoped<IDBService, DBService>();
            services.AddScoped<IMongoDBService, MongoDBService>();
            services.AddScoped<IEncryptionService, EncryptionService>();
            return services;
        }

    }
}
