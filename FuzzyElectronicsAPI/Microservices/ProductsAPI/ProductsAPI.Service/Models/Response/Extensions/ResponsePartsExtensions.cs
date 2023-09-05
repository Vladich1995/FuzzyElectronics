using ProductsAPI.Service.Models.Response.PartsDataResponse;
using ProductsAPI.Service.Models.StoredPartsData;
using System.Collections;

namespace ProductsAPI.Service.Models.Response.Extensions
{
    public static class ResponsePartsExtensions
    {
        public static BasePartDataResponse MapToBasePartDataResponse(this BasePartData data)
        {
            return new BasePartDataResponse
            {
                CollectionName = data.CollectionName,
                MakatMorLevi = data.MakatMorLevi,
                Description = data.Description,
                Price = data.Price,
                Category = data.Category,
                Brand = data.Brand,
                Model = data.Model,
                IsOnSale = data.IsOnSale,
                IsAvailable = data.IsAvailable,
                PictureURL = data.PictureURL
            };
        }
        public static CapacityDataResponse MapToResponseCapacity(CapacityData capacity)
        {
            return new CapacityDataResponse
            {
                CollectionName = "CapacityCollection",
                MakatMorLevi = capacity.MakatMorLevi,
                Description = capacity.Description,
                Price = capacity.Price,
                Category = capacity.Category,
                Brand = capacity.Brand,
                Model = capacity.Model,
                IsOnSale = capacity.IsOnSale,
                IsAvailable = capacity.IsAvailable,
                PictureURL = capacity.PictureURL,
                Size = capacity.Size,
                Interface = capacity.Interface,
                Remark  = capacity.Remark,
                Remark2 = capacity.Remark2
            };
        }

        public static CasesDataResponse MapToResponseCases(CasesData cases)
        {
            return new CasesDataResponse
            {
                CollectionName = "CasesCollection",
                MakatMorLevi = cases.MakatMorLevi,
                Description = cases.Description,
                Price = cases.Price,
                Category = cases.Category,
                Brand = cases.Brand,
                Model = cases.Model,
                IsOnSale = cases.IsOnSale,
                IsAvailable = cases.IsAvailable,
                PictureURL = cases.PictureURL,
                PSU = cases.PSU,
                MB_Type_Support = cases.MB_Type_Support,
                Drive_Bays = cases.Drive_Bays,
                Connections = cases.Connections,
                Size_mm = cases.Size_mm,
                Watter_Coling_Size = cases.Watter_Coling_Size,
                CPU_Cooler_Height_mm = cases.CPU_Cooler_Height_mm
            };
        }

        public static CPUDataResponse MapToResponseCPU(CPUData cpu)
        {
            return new CPUDataResponse
            {
                CollectionName = "CPUCollection",
                MakatMorLevi = cpu.MakatMorLevi,
                Description = cpu.Description,
                Price = cpu.Price,
                Category = cpu.Category,
                Brand = cpu.Brand,
                Model = cpu.Model,
                IsOnSale = cpu.IsOnSale,
                IsAvailable = cpu.IsAvailable,
                PictureURL = cpu.PictureURL,
                CoresOrThreads = cpu.CoresOrThreads,
                Clock_Sp = cpu.Clock_Sp,
                Pack = cpu.Pack,
                TDP = cpu.TDP
            };
        }

        public static MBDataResponse MapToResponseMB(MBData mb)
        {
            return new MBDataResponse
            {
                CollectionName = "MBCollection",
                MakatMorLevi = mb.MakatMorLevi,
                Description = mb.Description,
                Price = mb.Price,
                Category = mb.Category,
                Brand = mb.Brand,
                Model = mb.Model,
                IsOnSale = mb.IsOnSale,
                IsAvailable = mb.IsAvailable,
                PictureURL = mb.PictureURL,
                Chipset = mb.Chipset,
                DDR4 = mb. DDR4,
                DDR5 = mb. DDR5,
                Size = mb.Size,
                Remark = mb.Remark
            };
        }

        public static MemoryDataResponse MapToResponseMemory(MemoryData memory)
        {
            return new MemoryDataResponse
            {
                CollectionName = "MemoryCollection",
                MakatMorLevi = memory.MakatMorLevi,
                Description = memory.Description,
                Price = memory.Price,
                Category = memory.Category,
                Brand = memory.Brand,
                Model = memory.Model,
                IsOnSale = memory.IsOnSale,
                IsAvailable = memory.IsAvailable,
                PictureURL = memory.PictureURL,
                Kind = memory.Kind,
                Size = memory.Size,
                Speed = memory.Speed
            };
        }

        public static PCSystemDataResponse MapToResponsePCSystem(PCSystemData pcSystem)
        {
            return new PCSystemDataResponse
            {
                CollectionName = "PCSystemCollection",
                MakatMorLevi = pcSystem.MakatMorLevi,
                Description = pcSystem.Description,
                Price = pcSystem.Price,
                Category = pcSystem.Category,
                Brand = pcSystem.Brand,
                Model = pcSystem.Model,
                IsOnSale = pcSystem.IsOnSale,
                IsAvailable = pcSystem.IsAvailable,
                PictureURL = pcSystem.PictureURL,
                MB = pcSystem.MB,
                CPU = pcSystem.CPU,
                HDD = pcSystem.HDD,
                DDR = pcSystem. DDR,
                RAM = pcSystem.RAM,
                Graphic = pcSystem.Graphic,
                Case_PSU = pcSystem.Case_PSU,
                Remark = pcSystem.Remark
            };
        }

        public static PeripheralsDataResponse MapToResponsePeripherals(PeripheralsData peripherals)
        {
            return new PeripheralsDataResponse
            {
                CollectionName = "PeripheralsCollection",
                MakatMorLevi = peripherals.MakatMorLevi,
                Description = peripherals.Description,
                Price = peripherals.Price,
                Category = peripherals.Category,
                Brand = peripherals.Brand,
                Model = peripherals.Model,
                IsOnSale = peripherals.IsOnSale,
                IsAvailable = peripherals.IsAvailable,
                PictureURL = peripherals.PictureURL,
                Interface = peripherals.Interface,
                Type = peripherals.Type,
                Remark = peripherals.Remark
            };
        }

        public static PSUDataResponse MapToResponsePSU(PSUData psu)
        {
            return new PSUDataResponse
            {
                CollectionName = "PSUCollection",
                MakatMorLevi = psu.MakatMorLevi,
                Description = psu.Description,
                Price = psu.Price,
                Category = psu.Category,
                Brand = psu.Brand,
                Model = psu.Model,
                IsOnSale = psu.IsOnSale,
                IsAvailable = psu.IsAvailable,
                PictureURL = psu.PictureURL,
                Watt = psu.Watt,
                VGA = psu.VGA,
                ATX_8pin = psu.ATX_8pin,
                Warranty = psu.Warranty,
                _80_Efficiency = psu._80_Efficiency
            };
        }

        public static VGADataResponse MapToResponseVGA(VGAData vga)
        {
            return new VGADataResponse
            {
                CollectionName = "VGACollection",
                MakatMorLevi = vga.MakatMorLevi,
                Description = vga.Description,
                Price = vga.Price,
                Category = vga.Category,
                Brand = vga.Brand,
                Model = vga.Model,
                IsOnSale = vga.IsOnSale,
                IsAvailable = vga.IsAvailable,
                PictureURL = vga.PictureURL,
                Chipset = vga.Chipset,
                Memory = vga.Memory,
                PowerConnector = vga.PowerConnector,
                PowerReq = vga.PowerReq,
                LengthMm = vga.LengthMm,
            };
        }
    }
}
