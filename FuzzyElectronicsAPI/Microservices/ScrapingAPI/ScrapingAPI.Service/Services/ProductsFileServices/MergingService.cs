using DnsClient.Protocol;
using ScrapingAPI.Service.Models.Scraping.CsvProduct;
using ScrapingAPI.Service.Models.Scraping.MergedPartModels;
using ScrapingAPI.Service.Models.Scraping.ScrapedPartModels;
using ScrapingAPI.Service.Services.ProductsFileServices.Exceptions;
using ScrapingAPI.Service.Services.DatabaseServices;

namespace ScrapingAPI.Service.Services.ExcelServices
{
    /// <summary>
    /// Merges the objects from csv list and xlsx list, into one list of merged objects with desired fields.
    /// </summary>

    public class MergingService : IMergingService
    {
        private readonly IDBService _DBService;
        private List<MergedVGAData>? mergedVGADataList;
        private List<MergedMBData>? mergedMBDataList;
        private List<MergedCPUData>? mergedCPUDataList;
        private List<MergedMemoryData>? mergedMemoryDataList;
        private List<MergedCapacityData>? mergedCapacityDataList;
        private List<MergedPSUData>? mergedPSUDataList;
        private List<MergedCasesData>? mergedCasesDataList;
        private List<MergedPeripheralsData>? mergedPeripheralsDataList;
        private List<MergedPCSystemData>? mergedPCSystemDataList;

        public MergingService(IDBService DBService)
        {
            _DBService = DBService;
        }
        public async Task MergeCapacityData(List<CapacityData> capacityDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedCapacityDataList = new List<MergedCapacityData>();
                foreach (var item2 in capacityDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedCapacityData mergedCapacityData = new MergedCapacityData
                        {
                            CollectionName = "CapacityCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Size = item2.Size,
                            Interface = item2.Interface,
                            Remark = item2.Remark,
                            Remark2 = item2.Remark2,
                        };
                        if(mergedCapacityData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedCapacityData, "CapacityCollection");

                            if (!string.IsNullOrWhiteSpace(mergedCapacityData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedCapacityData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedCapacityData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging Capacity data");
            }
        }

        public async Task MergeCasesData(List<CasesData> casesDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedCasesDataList = new List<MergedCasesData>();
                foreach (var item2 in casesDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedCasesData mergedCasesData = new MergedCasesData
                        {
                            CollectionName = "CasesCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            PSU = item2.PSU,
                            MB_Type_Support = item2.MB_Type_Support,
                            Drive_Bays = item2.Drive_Bays,
                            Connections = item2.Connections,
                            Size_mm = item2.Size_mm,
                            Watter_Coling_Size = item2.Watter_Coling_Size,
                            CPU_Cooler_Height_mm = item2.CPU_Cooler_Height_mm
                        };
                        if (mergedCasesData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedCasesData, "CasesCollection");

                            if (!string.IsNullOrWhiteSpace(mergedCasesData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedCasesData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedCasesData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging Cases data");
            }
        }
        public async Task MergeCPUData(List<CPUData> CPUDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedCPUDataList = new List<MergedCPUData>();
                foreach (var item2 in CPUDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedCPUData mergedCPUData = new MergedCPUData
                        {
                            CollectionName = "CPUCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            CoresOrThreads = item2.CoresOrThreads,
                            Clock_Sp = item2.Clock_Sp,
                            Pack = item2.Pack,
                            TDP = item2.TDP,
                        };
                        if (mergedCPUData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedCPUData, "CPUCollection");

                            if (!string.IsNullOrWhiteSpace(mergedCPUData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedCPUData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedCPUData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging CPU data");
            }
            
        }
        public async Task MergeMBData(List<MBData> MBDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedMBDataList = new List<MergedMBData>();
                foreach (var item2 in MBDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedMBData mergedMBData = new MergedMBData
                        {
                            CollectionName = "MBCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Chipset = item2.Chipset,
                            DDR5 = item2.DDR5,
                            DDR4 = item2.DDR4,
                            Size = item2.Size,
                            Remark = item2.Remark,
                        };
                        if (mergedMBData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedMBData, "MBCollection");

                            if (!string.IsNullOrWhiteSpace(mergedMBData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedMBData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedMBData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging MB data");
            }
            
        }

        public async Task MergeMemoryData(List<MemoryData> MemoryDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedMemoryDataList = new List<MergedMemoryData>();
                foreach (var item2 in MemoryDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedMemoryData mergedMemoryData = new MergedMemoryData
                        {
                            CollectionName = "MemoryCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Kind = item2.Kind,
                            Size = item2.Size,
                            Speed = item2.Speed,
                        };
                        if (mergedMemoryData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedMemoryData, "MemoryCollection");

                            if (!string.IsNullOrWhiteSpace(mergedMemoryData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedMemoryData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedMemoryData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging Memory data");
            }
        }
        public async Task MergePCSystemData(List<PCSystemData> PCSystemDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedPCSystemDataList = new List<MergedPCSystemData>();
                foreach (var item2 in PCSystemDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedPCSystemData mergedPCSystemData = new MergedPCSystemData
                        {
                            CollectionName = "PCSystemCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            MB = item2.MB,
                            CPU = item2.CPU,
                            HDD = item2.HDD,
                            DDR = item2.DDR,
                            RAM = item2.RAM,
                            Graphic = item2.Graphic,
                            Case_PSU = item2.Case_PSU,
                            Remark = item2.Remark,
                        };
                        if (mergedPCSystemData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedPCSystemData, "PCSystemCollection");

                            if (!string.IsNullOrWhiteSpace(mergedPCSystemData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedPCSystemData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedPCSystemData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging PCSystem data");
            }
            
        }
        public async Task MergePeripheralsData(List<PeripheralsData> PeripheralsDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedPeripheralsDataList = new List<MergedPeripheralsData>();
                foreach (var item2 in PeripheralsDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedPeripheralsData mergedPeripheralsData = new MergedPeripheralsData
                        {
                            CollectionName = "PeripheralsCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Interface = item2.Interface,
                            Type = item2.Type,
                            Remark = item2.Remark,
                        };
                        if (mergedPeripheralsData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedPeripheralsData, "PeripheralsCollection");

                            if (!string.IsNullOrWhiteSpace(mergedPeripheralsData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedPeripheralsData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedPeripheralsData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging Peripherals data");
            }
            
        }
        public async Task MergePSUData(List<PSUData> PSUDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedPSUDataList = new List<MergedPSUData>();
                foreach (var item2 in PSUDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedPSUData mergedPSUData = new MergedPSUData
                        {
                            CollectionName = "PSUCollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Watt = item2.Watt,
                            VGA = item2.VGA,
                            ATX_8pin = item2.ATX_8pin,
                            Warranty = item2.Warranty,
                            _80_Efficiency = item2._80_Efficiency
                        };
                        if (mergedPSUData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedPSUData, "PSUCollection");

                            if (!string.IsNullOrWhiteSpace(mergedPSUData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedPSUData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedPSUData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging PSU data");
            }
            
        }
        public async Task MergeVGAData(List<VGAData> vgaDataList, List<Product> _records)
        {
            try
            {
                var recordsDictionary = _records.ToDictionary(item => item.MakatMorLevi, item => item);

                mergedVGADataList = new List<MergedVGAData>();
                foreach (var item2 in vgaDataList)
                {
                    if (recordsDictionary.TryGetValue(item2.Pn, out var item1))
                    {
                        MergedVGAData mergedVGAData = new MergedVGAData
                        {
                            CollectionName = "VGACollection",
                            MakatMorLevi = item2.Pn,
                            MakatDeveloper = item1.MakatDeveloper,
                            Description = item1.Description,
                            Category = item1.Category,
                            Price = item1.Price,
                            PictureURL = item1.PictureURL,
                            Brand = item1.Developer,
                            Model = item2.Model,
                            IsOnSale = item2.IsOnSale,
                            IsAvailable = item2.IsAvailable,
                            Chipset = item2.Chipset,
                            Memory = item2.Memory,
                            PowerConnector = item2.PowerConnector,
                            LengthMm = item2.LengthMm
                        };
                        if (mergedVGAData.IsAvailable == "זמין")
                        {
                            await _DBService.SaveObjectToDatabase(mergedVGAData, "VGACollection");

                            if (!string.IsNullOrWhiteSpace(mergedVGAData.IsOnSale) && !string.IsNullOrWhiteSpace(mergedVGAData.IsOnSale.Trim()))
                            {
                                await _DBService.SaveObjectToDatabase(mergedVGAData, "ItemsOnSaleCollection");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new MergingOperationException("An error occurred merging VGA data");
            }

            
        }
    }
}
