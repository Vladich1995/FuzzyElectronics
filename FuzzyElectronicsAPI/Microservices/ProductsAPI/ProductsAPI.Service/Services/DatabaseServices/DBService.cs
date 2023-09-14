using ProductsAPI.Service.Models.Enums;
using ProductsAPI.Service.Models.Request.Build;
using ProductsAPI.Service.Models.Request.Build.Verification;
using ProductsAPI.Service.Models.Response.Build;
using ProductsAPI.Service.Models.Response.PartsDataResponse;
using ProductsAPI.Service.Services.DatabaseServices.MongoDB;

namespace ProductsAPI.Service.Services.DatabaseServices
{
    public class DBService : IDBService
    {
        private readonly IMongoDBService _DBService;

        public DBService(IMongoDBService DBService)
        {
            _DBService = DBService;
        }

        public async Task<List<CapacityDataResponse>> GetCapacityPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetCapacityPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<CasesDataResponse>> GetCasesPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetCasesPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<CPUDataResponse>> GetCPUPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetCPUPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<MBDataResponse>> GetMBPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetMBPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<MemoryDataResponse>> GetMemoryPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetMemoryPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<PCSystemDataResponse>> GetPCSystemPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetPCSystemPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<PeripheralsDataResponse>> GetPeripheralsPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetPeripheralsPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<PSUDataResponse>> GetPSUPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetPSUPaginated(collectionName, skip, pageSize);
        }
        public async Task<List<VGADataResponse>> GetVGAPaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetVGAPaginated(collectionName, skip, pageSize);
        }

        public async Task<List<BasePartDataResponse>> GetItemsOnSalePaginated(string collectionName, int skip, int pageSize)
        {
            return await _DBService.GetItemsOnSalePaginated(collectionName, skip, pageSize);
        }
        public async Task CreateComputerBuild(ComputerBuildRequest build)
        {
            await _DBService.CreateComputerBuild(build);
        }
        public async Task<ComputerBuildResponse> GetComputerBuildByType(eBuildTypes type)
        {
            return await _DBService.GetComputerBuildByType(type);
        }

        public async Task<List<string>> VerifyProductExistance(Verification products)
        {
            return await _DBService.VerifyProductExistance(products);
        }

        public async Task<BuildTypesResponse> GetAvailableBuildTypes()
        {
            return await _DBService.GetAvailableBuildTypes();
        }

        public async Task SubBuildTypes(eBuildTypes type)
        {
            await _DBService.SubBuildTypes(type);
        }
        public async Task AddBuildTypes(eBuildTypes type)
        {
            await _DBService.AddBuildTypes(type);
        }
    }
}
