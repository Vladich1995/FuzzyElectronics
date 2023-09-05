using Microsoft.AspNetCore.Mvc;
using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Services.ConvertionServices;
using ScrapingAPI.Service.Services.ScrapingServices;
using ScrapingAPI.Service.Services.DatabaseServices;

namespace ScrapingAPI.Service.Controllers.V1
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v1/[controller]")]
    public class ScrapingController : ControllerBase
    {

        private readonly IScrapingService _ScrapingService;
        private readonly IReadingService _ReadingService;
        private readonly IDBService _DBService;

        public ScrapingController(IScrapingService ScrapingService, IReadingService ReadingService, IDBService DBService)
        {
            _ScrapingService = ScrapingService;
            _ReadingService = ReadingService;
            _DBService = DBService;
        }

        [HttpGet("retrieveData")]
        public async Task<IActionResult> Scraping()
        {
            var result = await _ScrapingService.DownloadFile();
            return Ok(result);
        }

        [HttpGet("converting")]
        public async Task<IActionResult> Converting()
        {
            await _DBService.DropCollections();
            var result = await _ReadingService.PrepareProductLists();
            await _ReadingService.DeleteFiles();
            return Ok(result);
        }


        [HttpPut("setScrapingCridentials")]
        public async Task<IActionResult> SetScrapingCredentials([FromBody] ScrapingLoginRequest model)
        {
            var result = await _ScrapingService.SetScrapingCredentials(model);
            return Ok(result);
        }
    }
}
