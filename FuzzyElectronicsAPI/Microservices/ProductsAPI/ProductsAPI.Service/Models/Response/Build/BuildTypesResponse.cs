using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ProductsAPI.Service.Models.Response.Build
{
    public class BuildTypesResponse
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public List<string> BuildTypes { get; set; }
    }
}
