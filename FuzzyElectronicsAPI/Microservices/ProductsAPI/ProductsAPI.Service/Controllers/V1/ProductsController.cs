using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Service.Models.Enums;
using ProductsAPI.Service.Models.Request.Build;
using ProductsAPI.Service.Models.Request.Build.Verification;
using ProductsAPI.Service.Models.Request.Query;
using ProductsAPI.Service.Services.DatabaseServices;
using ProductsAPI.Service.Services.ProductsService;
using System.ComponentModel.DataAnnotations;

namespace ProductsAPI.Service.Controllers.V1
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v1/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductsService _productsService;
        private readonly IDBService _dBService;
        private readonly IValidator<QueryParamsModel> _validator;
        public ProductsController(IProductsService productsService, IDBService dBService, IValidator<QueryParamsModel> validator) 
        {         
            _productsService = productsService;
            _dBService = dBService;
            _validator = validator;
        }
        [HttpGet]
        [Route("Cases")]
        public async Task<IActionResult> GetCasesCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetCasesPaginated("CasesCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("Capacity")]
        public async Task<IActionResult> GetCapacityCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetCapacityPaginated("CapacityCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("CPU")]
        public async Task<IActionResult> GetCPUCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetCPUPaginated("CPUCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("MB")]
        public async Task<IActionResult> GetMBCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetMBPaginated("MBCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("Memory")]
        public async Task<IActionResult> GetMemoryCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetMemoryPaginated("MemoryCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("PCSystem")]
        public async Task<IActionResult> GetPCSystemCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetPCSystemPaginated("PCSystemCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("Peripherals")]
        public async Task<IActionResult> GetPeripheralsCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetPeripheralsPaginated("PeripheralsCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("PSU")]
        public async Task<IActionResult> GetPSUCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetPSUPaginated("PSUCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }
        [HttpGet]
        [Route("VGA")]
        public async Task<IActionResult> GetVGACollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetVGAPaginated("VGACollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }

        [HttpGet]
        [Route("OnSale")]
        public async Task<IActionResult> GetOnSaleCollection([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            int skip = (queryModel.page - 1) * queryModel.pageSize;

            var productsList = await _dBService.GetItemsOnSalePaginated("ItemsOnSaleCollection", skip, queryModel.pageSize);

            if (productsList != null)
            {
                return Ok(productsList);
            }
            else
            {
                return BadRequest("A failure occurred while getting products on sale.");
            }
        }

        [HttpPost]
        [Route("CreateBuild")]
        public async Task<IActionResult> CreateComputerBuild([FromBody] ComputerBuildRequest build)
        {
            await _dBService.CreateComputerBuild(build);
            return Ok();
        }

        [HttpGet]
        [Route("GetBuild")]
        public async Task<IActionResult> GetBuildByType([FromQuery] eBuildTypes type)
        {
            var result = await _dBService.GetComputerBuildByType(type);
            return Ok(result);
        }

        [HttpPost]
        [Route("Verify")]
        public async Task<IActionResult> VerifyProductsExistance([FromBody] Verification products)
        {
            var result = await _dBService.VerifyProductExistance(products);
            return Ok(result);
        }

        [HttpGet]
        [Route("types")]
        public async Task<IActionResult> GetAvailabaleBuildTypes()
        {
            var result = await _dBService.GetAvailableBuildTypes();
            return Ok(result);
        }

        [HttpPut]
        [Route("subtype")]
        public async Task<IActionResult> SubBuildType( eBuildTypes type)
        {
            await _dBService.SubBuildTypes(type);
            return Ok();
        }

        [HttpPut]
        [Route("addtype")]
        public async Task<IActionResult> AddBuildType(eBuildTypes type)
        {
            await _dBService.AddBuildTypes(type);
            return Ok();
        }

    }
}
