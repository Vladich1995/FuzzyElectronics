using Microsoft.Extensions.DependencyInjection;
using OrdersAPI.Service.Services.DatabaseServices;
using OrdersAPI.Service.Services.DatabaseServices.MongoDB;
using OrdersAPI.Service.Services.OrderService;

namespace OrdersAPI.Service.Infrastructure
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
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IDBService, DBService>();
            services.AddScoped<IMongoDBService, MongoDBService>();
            return services;
        }

    }
}
