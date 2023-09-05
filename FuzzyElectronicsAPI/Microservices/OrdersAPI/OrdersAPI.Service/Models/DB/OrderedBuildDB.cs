using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using OrdersAPI.Service.Models.Request.Build;

namespace OrdersAPI.Service.Models.DB
{
    public class OrderedBuildDB : OrderedBuild
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string PublicId { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsSold { get; set; }
        public string OrderDate { get; set; }
        public string OrderTime { get; set; }
    }
}
