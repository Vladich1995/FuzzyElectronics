using OfficeOpenXml;
using ScrapingAPI.Service.Models.Scraping.ScrapedPartModels;
using static MongoDB.Driver.WriteConcern;

namespace ScrapingAPI.Service.Services.ProductsFileServices.Extensions
{
    public class WorksheetConvertion
    {
        public static VGAData VGADataToObject(ExcelWorksheet worksheet, int row) 
        {
            VGAData vgaData = new VGAData();

            vgaData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            vgaData.Brand = worksheet.Cells[row, 2].Value?.ToString();
            vgaData.Model = worksheet.Cells[row, 3].Value?.ToString();
            vgaData.Price = worksheet.Cells[row, 4].Value?.ToString();
            vgaData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            vgaData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            vgaData.Chipset = worksheet.Cells[row, 8].Value?.ToString();
            vgaData.Memory = worksheet.Cells[row, 10].Value?.ToString();
            vgaData.PowerConnector = worksheet.Cells[row, 16].Value?.ToString();
            vgaData.PowerReq = worksheet.Cells[row, 17].Value?.ToString();
            vgaData.LengthMm = worksheet.Cells[row, 20].Value?.ToString();

            return vgaData;
        }

        public static MBData MBDataToObject(ExcelWorksheet worksheet, int row)
        {
            MBData mbData = new MBData();

            mbData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            mbData.Model = worksheet.Cells[row, 3].Value?.ToString();
            mbData.Price = worksheet.Cells[row, 4].Value?.ToString();
            mbData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            mbData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            mbData.Chipset = worksheet.Cells[row, 8].Value?.ToString();
            mbData.DDR5 = worksheet.Cells[row, 9].Value?.ToString();
            mbData.DDR4 = worksheet.Cells[row, 10].Value?.ToString();
            mbData.Size = worksheet.Cells[row, 33].Value?.ToString();
            mbData.Remark = worksheet.Cells[row, 34].Value?.ToString();

            return mbData;
        }

        public static CPUData CPUDataToObject(ExcelWorksheet worksheet, int row)
        {
            CPUData cpuData = new CPUData();

            cpuData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            cpuData.Brand = worksheet.Cells[row, 2].Value?.ToString();
            cpuData.Model = worksheet.Cells[row, 3].Value?.ToString();
            cpuData.Price = worksheet.Cells[row, 4].Value?.ToString();
            cpuData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            cpuData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            cpuData.CoresOrThreads = worksheet.Cells[row, 8].Value?.ToString();
            cpuData.Clock_Sp = worksheet.Cells[row, 9].Value?.ToString();
            cpuData.Pack = worksheet.Cells[row, 12].Value?.ToString();
            cpuData.TDP = worksheet.Cells[row, 13].Value?.ToString();

            return cpuData;
        }

        public static MemoryData MemoryDataToObject(ExcelWorksheet worksheet, int row)
        {
            MemoryData memoryData = new MemoryData();

            memoryData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            memoryData.Brand = worksheet.Cells[row, 2].Value?.ToString();
            memoryData.Price = worksheet.Cells[row, 4].Value?.ToString();
            memoryData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            memoryData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            memoryData.Model = worksheet.Cells[row, 7].Value?.ToString();
            memoryData.Kind = worksheet.Cells[row, 8].Value?.ToString();
            memoryData.Size = worksheet.Cells[row, 9].Value?.ToString();
            memoryData.Speed = worksheet.Cells[row, 10].Value?.ToString();

            return memoryData;
        }

        public static CapacityData CapacityDataToObject(ExcelWorksheet worksheet, int row)
        {
            CapacityData capacityData = new CapacityData();

            capacityData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            capacityData.Brand = worksheet.Cells[row, 2].Value?.ToString();
            capacityData.Model = worksheet.Cells[row, 3].Value?.ToString();
            capacityData.Price = worksheet.Cells[row, 4].Value?.ToString();
            capacityData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            capacityData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            capacityData.Size = worksheet.Cells[row, 7].Value?.ToString();
            capacityData.Interface = worksheet.Cells[row, 8].Value?.ToString();
            capacityData.Remark = worksheet.Cells[row, 13].Value?.ToString();
            capacityData.Remark2 = worksheet.Cells[row, 14].Value?.ToString();

            return capacityData;
        }

        public static PSUData PSUDataToObject(ExcelWorksheet worksheet, int row)
        {
            PSUData psuData = new PSUData();

            psuData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            psuData.Model = worksheet.Cells[row, 3].Value?.ToString();
            psuData.Price = worksheet.Cells[row, 4].Value?.ToString();
            psuData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            psuData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            psuData.Watt = worksheet.Cells[row, 7].Value?.ToString();
            psuData.VGA = worksheet.Cells[row, 10].Value?.ToString();
            psuData.ATX_8pin = worksheet.Cells[row, 11].Value?.ToString();
            psuData.Warranty = worksheet.Cells[row, 14].Value?.ToString();
            psuData._80_Efficiency = worksheet.Cells[row, 15].Value?.ToString();

            return psuData;
        }

        public static CasesData CasesDataToObject(ExcelWorksheet worksheet, int row) 
        {
            CasesData casesData = new CasesData();

            casesData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            casesData.Model = worksheet.Cells[row, 3].Value?.ToString();
            casesData.Price = worksheet.Cells[row, 4].Value?.ToString();
            casesData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            casesData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            casesData.PSU = worksheet.Cells[row, 7].Value?.ToString();
            casesData.MB_Type_Support = worksheet.Cells[row, 11].Value?.ToString();
            casesData.Drive_Bays = worksheet.Cells[row, 12].Value?.ToString();
            casesData.Connections = worksheet.Cells[row, 13].Value?.ToString();
            casesData.Size_mm = worksheet.Cells[row, 14].Value?.ToString();
            casesData.Watter_Coling_Size = worksheet.Cells[row, 16].Value?.ToString();
            casesData.CPU_Cooler_Height_mm = worksheet.Cells[row, 17].Value?.ToString();

            return casesData;
        }

        public static PeripheralsData PeripheralsDataToObject(ExcelWorksheet worksheet, int row)
        {
            PeripheralsData peripheralsData = new PeripheralsData();

            peripheralsData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            peripheralsData.Model = worksheet.Cells[row, 3].Value?.ToString();
            peripheralsData.Price = worksheet.Cells[row, 4].Value?.ToString();
            peripheralsData.IsOnSale = worksheet.Cells[row, 5].Value?.ToString();
            peripheralsData.IsAvailable = worksheet.Cells[row, 6].Value?.ToString();
            peripheralsData.Interface = worksheet.Cells[row, 7].Value?.ToString();
            peripheralsData.Type = worksheet.Cells[row, 8].Value?.ToString();
            peripheralsData.Remark = worksheet.Cells[row, 11].Value?.ToString();

            return peripheralsData;
        }

        public static PCSystemData PCSystemDataToObject(ExcelWorksheet worksheet, int row)
        {
            PCSystemData pcSystemData = new PCSystemData();

            pcSystemData.Pn = worksheet.Cells[row, 1].Value?.ToString();
            pcSystemData.Price = worksheet.Cells[row, 3].Value?.ToString();
            pcSystemData.IsOnSale = worksheet.Cells[row, 4].Value?.ToString();
            pcSystemData.IsAvailable = worksheet.Cells[row, 5].Value?.ToString();
            pcSystemData.MB = worksheet.Cells[row, 6].Value?.ToString();
            pcSystemData.CPU = worksheet.Cells[row, 7].Value?.ToString();
            pcSystemData.HDD = worksheet.Cells[row, 8].Value?.ToString();
            pcSystemData.DDR = worksheet.Cells[row, 9].Value?.ToString();
            pcSystemData.RAM = worksheet.Cells[row, 10].Value?.ToString();
            pcSystemData.Graphic = worksheet.Cells[row, 12].Value?.ToString();
            pcSystemData.Case_PSU = worksheet.Cells[row, 13].Value?.ToString();
            pcSystemData.Remark = worksheet.Cells[row, 14].Value?.ToString();

            return pcSystemData;
        }

    }
}
