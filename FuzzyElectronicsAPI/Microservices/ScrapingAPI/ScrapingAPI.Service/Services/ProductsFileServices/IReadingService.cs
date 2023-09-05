
namespace ScrapingAPI.Service.Services.ConvertionServices
{
    public interface IReadingService
    {
        public Task<bool> PrepareProductLists();
        public Task DeleteFiles();
    }
}
