namespace ProductsAPI.Service.Models.Response.PartsDataResponse
{
    public class CPUDataResponse : BasePartDataResponse
    {
        public string CoresOrThreads { get; set; }
        public string Clock_Sp { get; set; }
        public string Pack { get; set; }
        public string TDP { get; set; }
    }
}
