namespace ProductsAPI.Service.Models.Response.PartsDataResponse
{ 
    public class PSUDataResponse : BasePartDataResponse
    {
        public string Watt { get; set; }
        public string VGA { get; set; }
        public string ATX_8pin { get; set; }
        public string Warranty { get; set; }
        public string _80_Efficiency { get; set; }
    }
}
