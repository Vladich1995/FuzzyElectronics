using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ScrapingAPI.Service.Models.Request.ScrapingCridentials
{
    public class ScrapingLoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }

    }
}
