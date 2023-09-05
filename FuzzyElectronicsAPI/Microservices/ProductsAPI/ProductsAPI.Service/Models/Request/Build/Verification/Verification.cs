namespace ProductsAPI.Service.Models.Request.Build.Verification
{
    public class Verification
    {
        public List<VerifyProductData> Cases { get; set; }
        public List<VerifyProductData> Capacity { get; set; }
        public List<VerifyProductData> CPU { get; set; }
        public List<VerifyProductData> MB { get; set; }
        public List<VerifyProductData> Memory { get; set; }
        public List<VerifyProductData> PCSystem { get; set; }
        public List<VerifyProductData> Peripherals { get; set; }
        public List<VerifyProductData> PSU { get; set; }
        public List<VerifyProductData> VGA { get; set; }
    }
}
