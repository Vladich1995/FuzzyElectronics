using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Product;
using OrdersAPI.Service.Models.Response;

namespace OrdersAPI.Service.Services.OrderService
{
    public interface IOrderService
    {
        public Task<List<string>> HandlePlaceBuildOrder(OrderedBuild build);
        public Task<List<OrderedBuildResponse>> HandleGetBuildOrdersForConfirmation();
        public Task HandleConfirmBuildOrderById(string id);
        public Task<List<OrderedBuildResponse>> HandleGetAllBuildOrders(int skip, int pageSize);
        public Task<OrderedBuildResponse> HandleGetBuildOrderById(string id);
        public Task<List<OrderedBuildResponse>> HandleGetSoldBuildOrders();
        public Task HandleMarkBuildAsSold(string id);

        public Task HandlePlaceProductOrder(OrderedProduct product);
        public Task<List<OrderedProductResponse>> HandleGetProductOrdersForConfirmation();
        public Task HandleConfirmProductOrderById(string id);
        public Task<List<OrderedProductResponse>> HandleGetAllProductOrders(int skip, int pageSize);
        public Task<OrderedProductResponse> HandleGetProductOrderById(string id);
        public Task<List<OrderedProductResponse>> HandleGetSoldProductOrders();
        public Task HandleMarkProductAsSold(string id);
    }
}
