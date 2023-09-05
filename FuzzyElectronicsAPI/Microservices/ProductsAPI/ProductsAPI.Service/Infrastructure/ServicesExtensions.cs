using Microsoft.Extensions.DependencyInjection;
using ProductsAPI.Service.Services.DatabaseServices;
using ProductsAPI.Service.Services.DatabaseServices.MongoDB;
using ProductsAPI.Service.Services.EncryptionServices;
using ProductsAPI.Service.Services.ProductsService;

namespace ProductsAPI.Service.Infrastructure
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
            services.AddScoped<IProductsService, ProductsService>();
            services.AddScoped<IDBService, DBService>();
            services.AddScoped<IMongoDBService, MongoDBService>();
            services.AddScoped<IEncryptionService, EncryptionService>();
            return services;
        }

    }
}
