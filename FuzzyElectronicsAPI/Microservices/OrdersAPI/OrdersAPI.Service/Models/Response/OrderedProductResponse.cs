using OrdersAPI.Service.Models.Request.Product;

namespace OrdersAPI.Service.Models.Response
{
    public class OrderedProductResponse : OrderedProduct
    {
        public string PublicId { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsSold { get; set; }
        public string OrderDate { get; set; }
        public string OrderTime { get; set; }
    }
}
