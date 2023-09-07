using CustomersAPI.Service.Models.Request;
using CustomersAPI.Service.Services.CustomerService;
using Microsoft.AspNetCore.Mvc;

namespace CustomersAPI.Service.Controllers.V1
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v1/[controller]")]
    public class CustomersController : Controller
    {
        private readonly ICustomersService _customersService;

        public CustomersController(ICustomersService customersService)
        {
            _customersService = customersService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateCustomer([FromBody] CreateCustomerRequest customer)
        {
            var result = await _customersService.HandleCreate(customer);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateCustomer([FromRoute] string id, [FromBody] UpdateCustomerRequest customer)
        {
            var result = await _customersService.HandleUpdate(id, customer);
            return Ok(result);
        }

        [HttpGet("getall")]

        public async Task<IActionResult> GetAllCustomers()
        {
            var result = await _customersService.HandleGetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById([FromRoute] string id)
        {
            var result = await _customersService.HandleGetById(id);
            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> CustomerLogin([FromBody] LoginCustomerRequest customer)
        {
            var result = await _customersService.HandleLogin(customer);
            return Ok(result);
        }
    }
}
