namespace ScrapingAPI.Service.Models.Scraping.ScrapedPartModels
{
    public class CPUData : BasePart
    {
        public string CoresOrThreads { get; set; }
        public string Clock_Sp { get; set; }
        public string Pack { get; set; }
        public string TDP { get; set; }

    }
}
