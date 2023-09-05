namespace ScrapingAPI.Service.Models.Scraping.ScrapedPartModels
{
    public class BasePart
    {
        public string Pn { get; set; }
        public string? Brand { get; set; }
        public string Model { get; set; }
        public string Price { get; set; }
        public string IsOnSale { get; set; }
        public string IsAvailable { get; set; }
        public string? PictureURL { get; set; }
    }
}
