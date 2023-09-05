using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ScrapingAPI.Service.Models.Scraping.MergedPartModels
{
    public class MergedBasePart
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string CollectionName { get; set; }
        public string MakatMorLevi { get; set; }
        public string MakatDeveloper { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Category { get; set; }
        public string? Brand { get; set; }
        public string Model { get; set; }
        public string IsOnSale { get; set; }
        public string IsAvailable { get; set; }
        public string? PictureURL { get; set; }
    }
}
