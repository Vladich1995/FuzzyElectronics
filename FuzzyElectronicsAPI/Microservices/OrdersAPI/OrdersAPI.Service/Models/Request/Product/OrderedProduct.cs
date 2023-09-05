using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace OrdersAPI.Service.Models.Request.Product
{
    public class OrderedProduct
    {
        public string CustomerId { get; set; }
        public ProductData ProductData { get; set; }
    }
}
