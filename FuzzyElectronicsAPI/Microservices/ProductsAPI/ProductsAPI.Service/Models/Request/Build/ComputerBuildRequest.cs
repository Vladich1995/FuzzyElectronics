using ProductsAPI.Service.Models.Enums;

namespace ProductsAPI.Service.Models.Request.Build
{
    public class ComputerBuildRequest
    {
        public eBuildTypes BuildType { get; set; }
        public List<BuildPart> Cases { get; set; }
        public List<BuildPart> Capacity { get; set; }
        public List<BuildPart> CPU { get; set; }
        public List<BuildPart> MB { get; set; }
        public List<BuildPart> Memory { get; set; }
        public List<BuildPart> PCSystem { get; set; }
        public List<BuildPart> Peripherals { get; set; }
        public List<BuildPart> PSU { get; set; }
        public List<BuildPart> VGA { get; set; }
    }
}
