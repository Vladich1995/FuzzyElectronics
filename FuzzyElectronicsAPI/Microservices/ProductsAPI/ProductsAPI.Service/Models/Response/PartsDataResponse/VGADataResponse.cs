namespace ProductsAPI.Service.Models.Response.PartsDataResponse
{
    public class VGADataResponse : BasePartDataResponse
    {
        public string Chipset { get; set; }
        public string Memory { get; set; }
        public string PowerConnector { get; set; }
        public string PowerReq { get; set; }
        public string LengthMm { get; set; }
    }
}
