﻿namespace ScrapingAPI.Service.Models.Scraping.MergedPartModels
{
    public class MergedPSUData : MergedBasePart
    {
        public string Watt { get; set; }
        public string VGA { get; set; }
        public string ATX_8pin { get; set; }
        public string Warranty { get; set; }
        public string _80_Efficiency { get; set; }
    }
}
