using PuppeteerSharp;
using static PuppeteerSharp.Extensions;
using ScrapingAPI.Service.Models.Request.ScrapingCridentials;
using ScrapingAPI.Service.Models.Response.ScrapingCridentials;
using ScrapingAPI.Service.Services.DatabaseServices;
using ScrapingAPI.Service.Services.ScrapingServices.Exceptions;

namespace ScrapingAPI.Service.Services.ScrapingServices
{
    /// <summary>
    /// Downloads the required xlsx and csv files from the given website with predefined credentials
    /// </summary>
    
    public class ScrapingService : IScrapingService
    {
        private Browser _browser; // Add this private field to store the browser instance
        private readonly IDBService _dBService;

        public ScrapingService(IDBService dBService)
        {
            // Configure PuppeteerSharp to use a headless browser
            new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision).Wait();
            var launchOptions = new LaunchOptions { Headless = false };
            _browser = Puppeteer.LaunchAsync(launchOptions).GetAwaiter().GetResult();
            _dBService = dBService;
        }

        public async Task<bool> DownloadFile()
        {
            var page = await _browser.NewPageAsync();
            try
            {
                await page.GoToAsync("https://www.morlevi.co.il/Home/Index");
                var anchorElementHandle = await page.QuerySelectorAsync("a[data-modal='/User/Login']");
                await page.EvaluateFunctionAsync("anchor => anchor.click()", anchorElementHandle);
                await page.WaitForSelectorAsync("#Email");
                await page.WaitForSelectorAsync("#Password");
            }
            catch (Exception ex)
            {
                throw new ScrapingOperationException("Error reaching destination website");
            }
            try
            {
                var model = await GetScrapingCridentials();
                await page.TypeAsync("#Email", model.Username);
                await page.TypeAsync("#Password", model.Password);
                var buttonElementHandle = await page.QuerySelectorAsync(".w-50.float-left");
                if (buttonElementHandle != null)
                {
                    await buttonElementHandle.ClickAsync();
                    await page.WaitForNavigationAsync();
                    await page.WaitForSelectorAsync(".d-flex.justify-content-between");
                }
                else
                {
                    Console.WriteLine("Button not found");
                }

            }
            catch (Exception ex)
            {
                throw new ScrapingOperationException("Error signing in to the destination website");
            }
            /////
            try
            {
                var anchorElementHandle = await page.QuerySelectorAsync("a[data-modal='/AllProductsPrices/all/true']");
                await page.EvaluateFunctionAsync("anchor => anchor.click()", anchorElementHandle);
                await page.WaitForSelectorAsync(".html-send.csv-open");
            }
            catch (Exception ex)
            {
                throw new ScrapingOperationException("Error opening csv download form");
            }
            try
            {
                var anchorElementHandle = await page.QuerySelectorAsync(".html-send.csv-open");
                await page.Client.SendAsync("Page.setDownloadBehavior", new
                {
                    behavior = "allow",
                    downloadPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Downloads")//Environment.GetEnvironmentVariable("PATH_TO_FILE")
            });
                await page.EvaluateExpressionAsync("document.querySelector(\"a[data-url='/AllProductsPrices/all?filetype=csv']\").click()");
            }
            catch (Exception ex)
            {
                throw new ScrapingOperationException("Error downloading csv file");
            }
            await Task.Delay(5000);
            string fileExtensionCSV = ".csv";
            string pathForDownloadedFile = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Downloads");//Environment.GetEnvironmentVariable("PATH_TO_FILE");
            string[] csvFiles = Directory.GetFiles(pathForDownloadedFile, "*" + fileExtensionCSV);
            if (csvFiles.Length > 0)
            {
                Console.WriteLine("CSV file(s) found in the folder:");
            }
            else
            {
                Console.WriteLine("No CSV file found in the folder.");
                throw new Exception("Error downloading the CSV file");
            }
            ////////
            try
            {
                var anchorElementHandle = await page.QuerySelectorAsync(".align-items-center.d-flex");
                await page.EvaluateFunctionAsync("anchor => anchor.click()", anchorElementHandle);
                await page.WaitForNavigationAsync();
                await page.WaitForXPathAsync("//a[contains(text(), 'מחירון מור לוי להורדה')]");
            }
            catch (Exception ex)
            {
                throw new ScrapingOperationException("Error opening xlsx file form");
            }

            try
            {
                var targetText = "מחירון מור לוי להורדה";
                var xpathExpression = $"//a[contains(text(), '{targetText}')]";
                var anchorElement = await page.WaitForXPathAsync(xpathExpression);

                await page.Client.SendAsync("Page.setDownloadBehavior", new
                {
                    behavior = "allow",
                    downloadPath = pathForDownloadedFile
                });
                // Get the download URL from the 'href' attribute of the anchor element.
                var downloadUrl = await anchorElement.EvaluateFunctionAsync<string>("el => el.href");

                // Navigate to the download URL to handle the file download.
                await page.GoToAsync(downloadUrl, new NavigationOptions { WaitUntil = new[] { WaitUntilNavigation.Networkidle0 } });
            
                await Task.Delay(10000);
                string fileExtensionXLSX = ".xlsx";

                string[] xlsxFiles = Directory.GetFiles(pathForDownloadedFile, "*" + fileExtensionXLSX);
                await _browser.CloseAsync();
                if (xlsxFiles.Length > 0)
                {
                    Console.WriteLine("XLSX file(s) found in the folder:");
                }
                else
                {
                    throw new ScrapingOperationException("Error downloading xlsx file");
                }
            }
            catch (Exception ex)
            {
                await Task.Delay(10000);
                string fileExtensionXLSX = ".xlsx";

                string[] xlsxFiles = Directory.GetFiles(pathForDownloadedFile, "*" + fileExtensionXLSX);
                await _browser.CloseAsync();
                if (xlsxFiles.Length > 0)
                {
                    Console.WriteLine("XLSX file(s) found in the folder:");
                }
                else
                {
                    throw new ScrapingOperationException("Error downloading xlsx file");
                }

            }
            return true;
        }

        public async Task<ScrapingLoginResponse> SetScrapingCredentials (ScrapingLoginRequest model)
        {
            return await _dBService.SetScrapingCridentials(model);
        }

        public async Task<ScrapingLoginResponse> GetScrapingCridentials()
        {
            return await _dBService.GetScrapingCridentials();
        }
        
    }
}
