
using ScrapingAPI.Service.Models.Scraping.CsvProduct;
using ScrapingAPI.Service.Models.Scraping.ScrapedPartModels;

namespace ScrapingAPI.Service.Services.ExcelServices
{
    public interface IMergingService
    {
        public Task MergeCapacityData(List<CapacityData> vgaDataList, List<Product> _records);
        public Task MergeCasesData(List<CasesData> casesDataList, List<Product> _records);
        public Task MergeCPUData(List<CPUData> CPUDataList, List<Product> _records);
        public Task MergeMBData(List<MBData> MBDataList, List<Product> _records);
        public Task MergeMemoryData(List<MemoryData> MemoryDataList, List<Product> _records);
        public Task MergePCSystemData(List<PCSystemData> PCSystemDataList, List<Product> _records);
        public Task MergePeripheralsData(List<PeripheralsData> PeripheralsDataList, List<Product> _records);
        public Task MergePSUData(List<PSUData> PSUDataList, List<Product> _records);
        public Task MergeVGAData(List<VGAData> vgaDataList, List<Product> _records);
    }
}
