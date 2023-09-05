using OrdersAPI.Service.Models.DB;

namespace OrdersAPI.Service.Models.Response.Extensions
{
    public static class OrderResponseExtensions
    {
        public static OrderedBuildResponse MapToOrderedBuildResponse(this OrderedBuildDB build)
        {
            return new OrderedBuildResponse
            {
                PublicId = build.PublicId,
                IsConfirmed = build.IsConfirmed,
                IsSold = build.IsSold,
                OrderDate = build.OrderDate,
                OrderTime = build.OrderTime,
                CustomerId = build.CustomerId,
                Products = build.Products
            };
        }

        public static OrderedProductResponse MapToOrderedProductResponse(this OrderedProductDB product)
        {
            return new OrderedProductResponse
            {
                PublicId = product.PublicId,
                IsConfirmed = product.IsConfirmed,
                IsSold = product.IsSold,
                OrderDate = product.OrderDate,
                OrderTime = product.OrderTime,
                CustomerId = product.CustomerId,
                ProductData = product.ProductData
            };
        }
    }
}
