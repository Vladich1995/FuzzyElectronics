using ProductsAPI.Service.Models.Enums;
using ProductsAPI.Service.Models.Request.Build;
using ProductsAPI.Service.Models.Request.Build.Verification;
using ProductsAPI.Service.Models.Response.Build;
using ProductsAPI.Service.Models.Response.PartsDataResponse;

namespace ProductsAPI.Service.Services.DatabaseServices.MongoDB
{
    public interface IMongoDBService
    {
        public Task<List<CapacityDataResponse>> GetCapacityPaginated(string collectionName, int skip, int pageSize);
        public Task<List<CasesDataResponse>> GetCasesPaginated(string collectionName, int skip, int pageSize);
        public Task<List<CPUDataResponse>> GetCPUPaginated(string collectionName, int skip, int pageSize);
        public Task<List<MBDataResponse>> GetMBPaginated(string collectionName, int skip, int pageSize);
        public Task<List<MemoryDataResponse>> GetMemoryPaginated(string collectionName, int skip, int pageSize);
        public Task<List<PCSystemDataResponse>> GetPCSystemPaginated(string collectionName, int skip, int pageSize);
        public Task<List<PeripheralsDataResponse>> GetPeripheralsPaginated(string collectionName, int skip, int pageSize);
        public Task<List<PSUDataResponse>> GetPSUPaginated(string collectionName, int skip, int pageSize);
        public Task<List<VGADataResponse>> GetVGAPaginated(string collectionName, int skip, int pageSize);
        public Task<List<BasePartDataResponse>> GetItemsOnSalePaginated(string collectionName, int skip, int pageSize);
        public Task CreateComputerBuild(ComputerBuildRequest build);

        public Task<List<ComputerBuildResponse>> GetAllBuilds();
        public Task<ComputerBuildResponse> GetComputerBuildByType(eBuildTypes type);
        public Task<List<string>> VerifyProductExistance(Verification products);

        public Task<BuildTypesResponse> GetAvailableBuildTypes();

        public Task SubBuildTypes(eBuildTypes type);
        public Task AddBuildTypes(eBuildTypes type);
    }
}

