namespace ProductsAPI.Service.Models.StoredPartsData
{
    public class CPUData : BasePartData
    {
        public string CoresOrThreads { get; set; }
        public string Clock_Sp { get; set; }
        public string Pack { get; set; }
        public string TDP { get; set; }
    }
}
