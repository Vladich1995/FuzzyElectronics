using CsvHelper.Configuration;
using CsvHelper;
using OfficeOpenXml;
using System.Globalization;
using System.Text;
using MongoDB.Driver;
using PuppeteerSharp;
using ScrapingAPI.Service.Services.ExcelServices;
using ScrapingAPI.Service.Models.Scraping.CsvProduct;
using ScrapingAPI.Service.Services.ProductsFileServices.Exceptions;
using ScrapingAPI.Service.Models.Scraping.Mappings;
using ScrapingAPI.Service.Models.Scraping.ScrapedPartModels;
using ScrapingAPI.Service.Services.ProductsFileServices.Extensions;

namespace ScrapingAPI.Service.Services.ConvertionServices
{
    /// <summary>
    /// Converting xlsx shets to separate lists and csv file into one list.
    /// </summary>

    public class ReadingService : IReadingService
    {
        private readonly IMergingService _MergingService;

        private List<Product>? _records;

        public ReadingService (IMergingService mergingService)
        {
            _MergingService = mergingService;
        }

        public async Task ConvertCsvToArray()
        {
            try
            {
                string downloadsDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Downloads");
                string[] csvFiles = Directory.GetFiles(downloadsDirectory, "*.csv");

                if (csvFiles.Length != 1)
                {
                    throw new Exception("There should be exactly one CSV file in the Downloads directory.");
                }

                string csvFilePath = csvFiles[0];


                var encoding = Encoding.GetEncoding("UTF-8");

                using (var reader = new StreamReader(csvFilePath, encoding))
                using (var csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture)
                {
                    // Set the delimiter if the CSV file is tab-separated
                    // Adjust the delimiter based on the actual separator used in the CSV file
                    Delimiter = "\t",
                    MissingFieldFound = null, // Ignore missing fields
                    HeaderValidated = null, // Ignore header validation
                    BadDataFound = context => { } // Ignore bad data
                }))
                {

                    // Use the custom ProductMap
                    csv.Context.RegisterClassMap<ProductMap>();

                    _records = csv.GetRecords<Product>().ToList();

                }

            } catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading data from csv");
            }
            
        }

        public async Task<bool> ReadVGADataFromExcel(string filePath)
        {
            List<VGAData> vgaDataList = new List<VGAData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["VGA"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            VGAData vgaData = WorksheetConvertion.VGADataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(vgaData.Price) || vgaData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                vgaDataList.Add(vgaData);
                            }
                        }
                    }
                }
                await _MergingService.MergeVGAData(vgaDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading VGA data from excel");
            }
        }



        public async Task<bool> ReadMBDataFromExcel(string filePath)
        {
            List<MBData> mbDataList = new List<MBData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["MB"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;
                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            MBData mbData = WorksheetConvertion.MBDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(mbData.Price) || mbData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                mbDataList.Add(mbData);
                            }
                        }
                    }
                }
                await _MergingService.MergeMBData(mbDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading MB data from excel");
            }
           
        }

        public async Task<bool> ReadCPUDataFromExcel(string filePath)
        {
            List<CPUData> cpuDataList = new List<CPUData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["CPU"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            CPUData cpuData = WorksheetConvertion.CPUDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(cpuData.Price) || cpuData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                cpuDataList.Add(cpuData);
                            }
                        }
                    }
                }
                await _MergingService.MergeCPUData(cpuDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading CPU data from excel");
            }

        }

        public async Task<bool> ReadMemoryDataFromExcel(string filePath)
        {
            List<MemoryData> memoryDataList = new List<MemoryData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["Memory"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            MemoryData memoryData = WorksheetConvertion.MemoryDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(memoryData.Price) || memoryData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                memoryDataList.Add(memoryData);
                            }
                        }
                    }
                }
                await _MergingService.MergeMemoryData(memoryDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading Memory data from excel");
            }

        }

        public async Task<bool> ReadCapacityDataFromExcel(string filePath)
        {
            List<CapacityData> capacityDataList = new List<CapacityData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["HDD | SSD | DVDRW "];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            CapacityData capacityData = WorksheetConvertion.CapacityDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(capacityData.Price) || capacityData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                capacityDataList.Add(capacityData);
                            }
                        }
                    }
                }
                await _MergingService.MergeCapacityData(capacityDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading Capacity data from excel");
            }
        }

        public async Task<bool> ReadPSUDataFromExcel(string filePath)
        {
            List<PSUData> psuDataList = new List<PSUData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["PSU"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            PSUData psuData = WorksheetConvertion.PSUDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(psuData.Price) || psuData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                psuDataList.Add(psuData);
                            }
                        }
                    }
                }
                await _MergingService.MergePSUData(psuDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading PSU data from excel");
            }
        }

        public async Task<bool> ReadCasesDataFromExcel(string filePath)
        {
            List<CasesData> casesDataList = new List<CasesData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["Cases"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            CasesData casesData = WorksheetConvertion.CasesDataToObject(worksheet, row);

                            // Check if all Brand values are null or similar to the key name
                            bool shouldSkip = string.IsNullOrEmpty(casesData.Price) || casesData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                casesDataList.Add(casesData);
                            }
                        }
                    }
                }
                await _MergingService.MergeCasesData(casesDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading Cases data from excel");
            }
        }

        public async Task<bool> ReadPeripheralsDataFromExcel(string filePath)
        {
            List<PeripheralsData> peripheralsDataList = new List<PeripheralsData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["Peripheral "];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            PeripheralsData peripheralsData = WorksheetConvertion.PeripheralsDataToObject(worksheet, row);
                            bool shouldSkip = string.IsNullOrEmpty(peripheralsData.Price) || peripheralsData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                peripheralsDataList.Add(peripheralsData);
                            }
                        }
                    }
                }
                await _MergingService.MergePeripheralsData(peripheralsDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading Peripheral data from excel");
            }
            
        }


        public async Task<bool> ReadPCSystemDataFromExcel(string filePath)
        {
            List<PCSystemData> pcSystemDataList = new List<PCSystemData>();
            try
            {
                using (var package = new ExcelPackage(new FileInfo(filePath)))
                {
                    var worksheet = package.Workbook.Worksheets["PC Systems"];
                    if (worksheet != null)
                    {
                        int rowCount = worksheet.Dimension.Rows;
                        int colCount = worksheet.Dimension.Columns;

                        // Assuming the first row contains column headers, start reading from the second row.
                        for (int row = 2; row <= rowCount; row++)
                        {
                            PCSystemData pcSystemData = WorksheetConvertion.PCSystemDataToObject(worksheet, row);


                            // Check if all Brand values are null or similar to the key name
                            bool shouldSkip = string.IsNullOrEmpty(pcSystemData.Price) || pcSystemData.Price.Equals("Price");

                            if (!shouldSkip)
                            {
                                pcSystemDataList.Add(pcSystemData);
                            }
                        }
                    }
                }
                await _MergingService.MergePCSystemData(pcSystemDataList, _records);
                return true;
            }
            catch (Exception ex)
            {
                throw new ReadingOperationException("An error occurred reading PCSystem data from excel");
            }
            
        }


        public async Task<bool> PrepareProductLists()
        {
            string downloadsDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Downloads");
            string[] xlsxFiles = Directory.GetFiles(downloadsDirectory, "*.xlsx");

            if (xlsxFiles.Length != 1)
            {
                throw new Exception("There should be exactly one XLSX file in the Downloads directory.");
            }

            string filePath = xlsxFiles[0];

            await ConvertCsvToArray();

            var tasks = new List<Task<bool>>();

            // Add tasks for reading from different sheets
            tasks.Add(ReadPeripheralsDataFromExcel(filePath));
            tasks.Add(ReadCapacityDataFromExcel(filePath));
            tasks.Add(ReadCasesDataFromExcel(filePath));
            tasks.Add(ReadCPUDataFromExcel(filePath));
            tasks.Add(ReadMBDataFromExcel(filePath));
            tasks.Add(ReadMemoryDataFromExcel(filePath));
            tasks.Add(ReadPSUDataFromExcel(filePath));
            tasks.Add(ReadVGADataFromExcel(filePath));
            tasks.Add(ReadPCSystemDataFromExcel(filePath));

            // Run tasks concurrently
            await Task.WhenAll(tasks);

            // Check results
            bool allTasksSucceeded = tasks.All(task => task.Result);

            return allTasksSucceeded;
        }

        public async Task DeleteFiles()
        {
            string downloadsFolderPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Downloads");

            // Ensure the directory exists
            if (Directory.Exists(downloadsFolderPath))
            {
                // Get a list of files in the directory
                string[] files = Directory.GetFiles(downloadsFolderPath);

                foreach (string filePath in files)
                {
                    try
                    {
                        // Delete each file
                        File.Delete(filePath);
                        Console.WriteLine($"Deleted: {filePath}");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error deleting file: {ex.Message}");
                    }
                }
            }
            else
            {
                Console.WriteLine("Downloads folder does not exist.");
            }
        }
    }
}
