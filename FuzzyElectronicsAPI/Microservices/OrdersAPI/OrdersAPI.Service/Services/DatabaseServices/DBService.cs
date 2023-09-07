using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Product;
using OrdersAPI.Service.Services.DatabaseServices.MongoDB;
using System.Runtime.InteropServices;

namespace OrdersAPI.Service.Services.DatabaseServices
{
    public class DBService : IDBService
    {
        private readonly IMongoDBService _DBService;

        public DBService(IMongoDBService DBService)
        {
            _DBService = DBService;
        }

        public async Task<List<string>> VerifyBuildProductExistance(BuildData products)
        {
            return await _DBService.VerifyBuildProductExistance(products);
        }

        public async Task PlaceBuildOrderForConfirmation(OrderedBuildDB buildDB)
        {
            await _DBService.PlaceBuildOrderForConfirmation(buildDB);
        }

        public async Task<List<OrderedBuildDB>> GetBuildOrdersForConfirmation()
        {
            return await _DBService.GetBuildOrdersForConfirmation();
        }
        public async Task ConfirmBuildOrderById(string id)
        {
            await _DBService.ConfirmBuildOrderById(id);
        }

        public async Task<List<OrderedBuildDB>> GetAllBuildOrders(int skip, int pageSize)
        {
            return await _DBService.GetAllBuildOrders(skip, pageSize);
        }

        public async Task<OrderedBuildDB> GetBuildOrderById(string id)
        {
            return await _DBService.GetBuildOrderById(id);
        }

        public async Task<List<OrderedBuildDB>> GetSoldBuildOrders()
        {
            return await _DBService.GetSoldBuildOrders();
        }
        public async Task MarkBuildAsSold(string id)
        {
            await _DBService.MarkBuildAsSold(id);
        }

        public async Task<bool> VerifySingleProductExistance(ProductData data)
        {
            return await _DBService.VerifySingleProductExistance(data);
        }
        public async Task PlaceProductOrderForConfirmation(OrderedProductDB productDB)
        {
            await _DBService.PlaceProductOrderForConfirmation(productDB);
        }
        public async Task<List<OrderedProductDB>> GetProductOrdersForConfirmation()
        {
            return await _DBService.GetProductOrdersForConfirmation();
        }
        public async Task ConfirmProductOrderById(string id)
        {
            await _DBService.ConfirmProductOrderById(id);
        }
        public async Task<List<OrderedProductDB>> GetAllProductOrders(int skip, int pageSize)
        {
            return await _DBService.GetAllProductOrders(skip, pageSize);
        }
        public async Task<OrderedProductDB> GetProductOrderById(string id)
        {
            return await _DBService.GetProductOrderById(id);
        }
        public async Task<List<OrderedProductDB>> GetSoldProductOrders()
        {
            return await _DBService.GetSoldProductOrders();
        }
        public async Task MarkProductAsSold(string id)
        {
            await _DBService.MarkProductAsSold(id);
        }

        public async Task<List<OrderedBuildDB>> GetBuildOrdersByCustomer(string customerId)
        {
            return await _DBService.GetBuildOrdersByCustomer(customerId);
        }
        public async Task<List<OrderedProductDB>> GetProductOrdersByCustomer(string customerId)
        {
            return await _DBService.GetProductOrdersByCustomer(customerId);
        }
    }
}
