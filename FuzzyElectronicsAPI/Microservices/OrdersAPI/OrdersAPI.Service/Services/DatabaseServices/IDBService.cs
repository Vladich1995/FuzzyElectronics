using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Product;

namespace OrdersAPI.Service.Services.DatabaseServices
{
    public interface IDBService
    {
        public Task<List<string>> VerifyBuildProductExistance(BuildData products);
        public Task PlaceBuildOrderForConfirmation(OrderedBuildDB buildDB);
        public Task<List<OrderedBuildDB>> GetBuildOrdersForConfirmation();
        public Task ConfirmBuildOrderById(string id);
        public Task<List<OrderedBuildDB>> GetAllBuildOrders(int skip, int pageSize);
        public Task<OrderedBuildDB> GetBuildOrderById(string id);
        public Task<List<OrderedBuildDB>> GetSoldBuildOrders();
        public Task MarkBuildAsSold(string id);

        public Task<bool> VerifySingleProductExistance(ProductData data);
        public Task PlaceProductOrderForConfirmation(OrderedProductDB productDB);
        public Task<List<OrderedProductDB>> GetProductOrdersForConfirmation();
        public Task ConfirmProductOrderById(string id);
        public Task<List<OrderedProductDB>> GetAllProductOrders(int skip, int pageSize);
        public Task<OrderedProductDB> GetProductOrderById(string id);
        public Task<List<OrderedProductDB>> GetSoldProductOrders();
        public Task MarkProductAsSold(string id);
    }
}
