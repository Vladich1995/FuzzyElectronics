using OrdersAPI.Service.Models.Request.Build;

namespace OrdersAPI.Service.Models.Response
{
    public class OrderedBuildResponse : OrderedBuild
    {
        public string PublicId { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsSold { get; set; }
        public string OrderDate { get; set; }
        public string OrderTime { get; set; }
    }
}
