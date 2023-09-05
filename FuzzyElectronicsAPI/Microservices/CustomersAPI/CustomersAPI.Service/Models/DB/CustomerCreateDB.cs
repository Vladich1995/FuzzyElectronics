using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace CustomersAPI.Service.Models.DB
{
    public class CustomerCreateDB
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string PublicId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
