namespace ScrapingAPI.Service.Models.Scraping.MergedPartModels
{
    public class MergedCPUData : MergedBasePart
    {
        public string CoresOrThreads { get; set; }
        public string Clock_Sp { get; set; }
        public string Pack { get; set; }
        public string TDP { get; set; }
    }
}
