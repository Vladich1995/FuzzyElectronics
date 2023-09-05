using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ScrapingAPI.Service.Models.DB
{
    public class ScrapingLoginDB
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
