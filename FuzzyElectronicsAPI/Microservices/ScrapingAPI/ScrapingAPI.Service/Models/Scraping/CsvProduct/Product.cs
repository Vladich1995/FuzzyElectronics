using System.Diagnostics.Contracts;

namespace ScrapingAPI.Service.Models.Scraping.CsvProduct
{
    public class Product
    {
        public required string MakatMorLevi { get; set; }
        public required string MakatDeveloper { get; set; }
        public required string Description { get; set; }
        public required string Price { get; set; }
        public required string Category { get; set; }
        public required string Available { get; set; }
        public required string Developer { get; set; }
        public required string PictureURL { get; set; }
    }
}
