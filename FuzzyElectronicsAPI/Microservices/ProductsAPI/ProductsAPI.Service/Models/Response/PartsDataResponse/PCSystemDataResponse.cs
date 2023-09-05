namespace ProductsAPI.Service.Models.Response.PartsDataResponse
{
    public class PCSystemDataResponse : BasePartDataResponse
    {
        public string MB { get; set; }
        public string CPU { get; set; }
        public string HDD { get; set; }
        public string DDR { get; set; }
        public string RAM { get; set; }
        public string Graphic { get; set; }
        public string Case_PSU { get; set; }
        public string Remark { get; set; }
    }
}
