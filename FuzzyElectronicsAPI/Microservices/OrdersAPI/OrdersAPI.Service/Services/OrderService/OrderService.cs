using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Extensions;
using OrdersAPI.Service.Models.Request.Product;
using OrdersAPI.Service.Models.Response;
using OrdersAPI.Service.Models.Response.Extensions;
using OrdersAPI.Service.Services.DatabaseServices;

namespace OrdersAPI.Service.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly IDBService _dBService;
        public OrderService(IDBService dBService)
        {
            _dBService = dBService;
        }
        public async Task<List<string>> HandlePlaceBuildOrder(OrderedBuild build)
        {
            var outOfStock = await _dBService.VerifyBuildProductExistance(build.Products);
            if(outOfStock == null)
            {
                OrderedBuildDB buildDB = OrderRequestExtensions.MapToOrderedBuildDB(build);
                await _dBService.PlaceBuildOrderForConfirmation(buildDB);
            }
            return outOfStock;
        }

        public async Task<List<OrderedBuildResponse>> HandleGetBuildOrdersForConfirmation()
        {
            var result =  await _dBService.GetBuildOrdersForConfirmation();
            var responseList = new List<OrderedBuildResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedBuildResponse(part));
            }
            return responseList;
        }

        public async Task HandleConfirmBuildOrderById(string id)
        {
            await _dBService.ConfirmBuildOrderById(id);
        }

        public async Task<List<OrderedBuildResponse>> HandleGetAllBuildOrders(int skip, int pageSize)
        {
            var result = await _dBService.GetAllBuildOrders(skip, pageSize);
            var responseList = new List<OrderedBuildResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedBuildResponse(part));
            }
            return responseList;
        }

        public async Task<OrderedBuildResponse> HandleGetBuildOrderById(string id)
        {
            var result =  await _dBService.GetBuildOrderById(id);
            return OrderResponseExtensions.MapToOrderedBuildResponse(result);
        }

        public async Task<List<OrderedBuildResponse>> HandleGetSoldBuildOrders()
        {
            var result = await _dBService.GetSoldBuildOrders();
            var responseList = new List<OrderedBuildResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedBuildResponse(part));
            }
            return responseList;
        }

        public async Task HandleMarkBuildAsSold(string id)
        {
            await _dBService.MarkBuildAsSold(id);
        }

        public async Task HandlePlaceProductOrder(OrderedProduct product)
        {
            var inStock = await _dBService.VerifySingleProductExistance(product.ProductData);
            if (inStock)
            {
                OrderedProductDB productDB = OrderRequestExtensions.MapToOrderedProductDB(product);
                await _dBService.PlaceProductOrderForConfirmation(productDB);
            }
        }
        public async Task<List<OrderedProductResponse>> HandleGetProductOrdersForConfirmation()
        {
            var result = await _dBService.GetProductOrdersForConfirmation();
            var responseList = new List<OrderedProductResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedProductResponse(part));
            }
            return responseList;
        }
        public async Task HandleConfirmProductOrderById(string id)
        {
            await _dBService.ConfirmProductOrderById(id);
        }
        public async Task<List<OrderedProductResponse>> HandleGetAllProductOrders(int skip, int pageSize)
        {
            var result = await _dBService.GetAllProductOrders(skip, pageSize);
            var responseList = new List<OrderedProductResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedProductResponse(part));
            }
            return responseList;
        }
        public async Task<OrderedProductResponse> HandleGetProductOrderById(string id)
        {
            var result = await _dBService.GetProductOrderById(id);
            return OrderResponseExtensions.MapToOrderedProductResponse(result);
        }
        public async Task<List<OrderedProductResponse>> HandleGetSoldProductOrders()
        {
            var result = await _dBService.GetSoldProductOrders();
            var responseList = new List<OrderedProductResponse>();
            foreach (var part in result)
            {
                responseList.Add(OrderResponseExtensions.MapToOrderedProductResponse(part));
            }
            return responseList;
        }
        public async Task HandleMarkProductAsSold(string id)
        {
            await _dBService.MarkProductAsSold(id);
        }
        public async Task<List<OrderedBuildDB>> HandleGetBuildOrdersByCustomer(string customerId)
        {
            return await _dBService.GetBuildOrdersByCustomer(customerId);
        }
        public async Task<List<OrderedProductDB>> HandleGetProductOrdersByCustomer(string customerId)
        {
            return await _dBService.GetProductOrdersByCustomer(customerId);
        }
        public async Task<int> GetOrdersCountByCustomer(string id)
        {
            var resBuilds = await HandleGetBuildOrdersByCustomer(id);
            var resProducts = await HandleGetProductOrdersByCustomer(id);
            return resBuilds.Count + resProducts.Count;
        }
    }
}
