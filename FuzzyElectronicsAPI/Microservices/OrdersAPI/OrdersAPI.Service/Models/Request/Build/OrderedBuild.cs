using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using OrdersAPI.Service.Models.Request.Build.Verification;

namespace OrdersAPI.Service.Models.Request.Build
{
    public class OrderedBuild
    {
        public string CustomerId { get; set; }
        public BuildData Products { get; set; }
    }
}
