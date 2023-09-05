using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;

namespace ScrapingAPI.Service.Services.ScrapingServices
{
    public interface IScrapingService
    {
        public Task<bool> DownloadFile();
        public Task<ScrapingLoginResponse> SetScrapingCredentials(ScrapingLoginRequest model);
    }
}
