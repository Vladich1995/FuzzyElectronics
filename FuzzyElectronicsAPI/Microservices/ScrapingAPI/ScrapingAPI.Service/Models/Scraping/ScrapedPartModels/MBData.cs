using System.Numerics;

namespace ScrapingAPI.Service.Models.Scraping.ScrapedPartModels
{
    public class MBData : BasePart
    {
        public string Chipset { get; set; }
        public string DDR5 { get; set; }
        public string DDR4 { get; set; }
        public string Size { get; set; }
        public string Remark { get; set; }
    }
}
