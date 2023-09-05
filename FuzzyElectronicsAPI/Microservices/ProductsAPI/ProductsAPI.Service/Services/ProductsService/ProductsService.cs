using ProductsAPI.Service.Models.Response.PartsDataResponse;
using ProductsAPI.Service.Services.DatabaseServices;

namespace ProductsAPI.Service.Services.ProductsService
{
    public class ProductsService : IProductsService
    {
        private readonly IDBService _dBService;
        public ProductsService(IDBService dBService)
        {
            _dBService = dBService;
        }
    }
}
