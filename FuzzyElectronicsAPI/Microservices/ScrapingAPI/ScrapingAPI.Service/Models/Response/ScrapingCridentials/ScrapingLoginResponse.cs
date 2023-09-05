using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ScrapingAPI.Service.Models.Response.ScrapingCridentials
{
    public class ScrapingLoginResponse
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
