using OrdersAPI.Service.Models.DB;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Build.Verification;
using OrdersAPI.Service.Models.Request.Product;

namespace OrdersAPI.Service.Models.Request.Extensions
{
    public static class OrderRequestExtensions
    {
        public static OrderedBuildDB MapToOrderedBuildDB(this OrderedBuild build)
        {
            return new OrderedBuildDB
            {
                PublicId = Guid.NewGuid().ToString(),
                IsConfirmed = false,
                IsSold = false,
                OrderDate = DateTime.Now.ToString("dd-MM-yyyy"),
                OrderTime = DateTime.Now.ToString("HH:mm:ss"),
                CustomerId = build.CustomerId,
                Products = build.Products
            };
        }

        public static OrderedProductDB MapToOrderedProductDB(this OrderedProduct product)
        {
            return new OrderedProductDB
            {
                PublicId = Guid.NewGuid().ToString(),
                IsConfirmed = false,
                IsSold = false,
                OrderDate = DateTime.Now.ToString("dd-MM-yyyy"),
                OrderTime = DateTime.Now.ToString("HH:mm:ss"),
                CustomerId = product.CustomerId,
                ProductData = product.ProductData
            };
        }
    }
}
