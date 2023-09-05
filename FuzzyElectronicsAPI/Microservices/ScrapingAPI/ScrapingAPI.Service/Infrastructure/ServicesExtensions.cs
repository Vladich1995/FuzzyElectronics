using ScrapingAPI.Service.Services.DatabaseServices;
using ScrapingAPI.Service.Services.ScrapingServices;
using ScrapingAPI.Service.Services.ConvertionServices;
using ScrapingAPI.Service.Services.ExcelServices;
using ScrapingAPI.Service.Services.EncryptionServices;
using ScrapingAPI.Service.Services.DatabaseServices.MongoDB;
using MongoDB.Bson.Serialization;
using ScrapingAPI.Service.Models.Scraping.MergedPartModels;

namespace ScrapingAPI.Service.Infrastructure
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
            RegisterMongoDBClassMap();
            services.AddScoped<IMongoDBService, MongoDBService>();
            services.AddScoped<IDBService, DBService>();
            services.AddScoped<IScrapingService, ScrapingService>();
            services.AddScoped<IReadingService, ReadingService>();
            services.AddScoped<IMergingService, MergingService>();
            services.AddScoped<IEncryptionService, EncryptionService>();

            return services;
        }

        private static void RegisterMongoDBClassMap()
        {
            BsonClassMap.RegisterClassMap<MergedBasePart>(cm =>
            {
                cm.AutoMap();
                cm.SetIsRootClass(true);
                cm.AddKnownType(typeof(MergedCapacityData));
                cm.AddKnownType(typeof(MergedCasesData));
                cm.AddKnownType(typeof(MergedCPUData));
                cm.AddKnownType(typeof(MergedMBData));
                cm.AddKnownType(typeof(MergedMemoryData));
                cm.AddKnownType(typeof(MergedPCSystemData));
                cm.AddKnownType(typeof(MergedPeripheralsData));
                cm.AddKnownType(typeof(MergedPSUData));
                cm.AddKnownType(typeof(MergedVGAData));
            });
        }

    }
}
