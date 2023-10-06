using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using OrdersAPI.Service.Models.Request.Build;
using OrdersAPI.Service.Models.Request.Product;
using OrdersAPI.Service.Models.Request.Query;
using OrdersAPI.Service.Services.OrderService;
using System.ComponentModel.DataAnnotations;

namespace OrdersAPI.Service.Controllers.V1
{
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v1/[controller]")]
    public class OrdersController : Controller
    {
        private readonly IOrderService _orderService;
        private readonly IValidator<QueryParamsModel> _validator;

        public OrdersController(IOrderService orderService, IValidator<QueryParamsModel> validator)
        {
            _orderService = orderService;
            _validator = validator;
        }
        [HttpPost]
        [Route("PlaceBuildOrder")]
        public async Task<IActionResult> PlaceBuildOrderForConfirmation([FromBody] OrderedBuild build)
        {
            var result = await _orderService.HandlePlaceBuildOrder(build);
            return Ok(result);
        }

        [HttpGet]
        [Route("BuildOrdersForConfirmation")]

        public async Task<IActionResult> GetBuildOrdersForConfirmation()
        {
            var result = await _orderService.HandleGetBuildOrdersForConfirmation();
            return Ok(result);
        }

        [HttpPut]
        [Route("ConfirmBuildOrder")]

        public async Task<IActionResult> ConfirmBuildOrderById([FromQuery] string id)
        {
            await _orderService.HandleConfirmBuildOrderById(id);
            return Ok(); 
        }

        [HttpGet]
        [Route("AllBuildOrders")]

        public async Task<IActionResult> GetAllBuildOrders([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }
            int skip = (queryModel.page - 1) * queryModel.pageSize;
            var result = await _orderService.HandleGetAllBuildOrders(skip, queryModel.pageSize);
            return Ok(result);
        }

        [HttpGet]
        [Route("BuildOrderById")]

        public async Task<IActionResult> GetBuildOrderById([FromQuery] string id)
        {
            var result = await _orderService.HandleGetBuildOrderById(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("SoldBuildOrders")]

        public async Task<IActionResult> GetSoldBuildOrders()
        {
            var result = await _orderService.HandleGetSoldBuildOrders();
            return Ok(result);
        }

        [HttpPut]
        [Route("MarkBuildAsSold")]

        public async Task<IActionResult> MarkBuildAsSold([FromQuery] string id)
        {
            await _orderService.HandleMarkBuildAsSold(id);
            return Ok();
        }

        [HttpPost]
        [Route("PlaceProductsOrder")]
        public async Task<IActionResult> PlaceProductsOrderForConfirmation([FromBody] List<OrderedProduct> products)
        {
            await _orderService.HandlePlaceProductOrder(products);
            return Ok();
        }

        [HttpGet]
        [Route("ProductOrdersForConfirmation")]

        public async Task<IActionResult> GetProductOrdersForConfirmation()
        {
            var result = await _orderService.HandleGetProductOrdersForConfirmation();
            return Ok(result);
        }

        [HttpPut]
        [Route("ConfirmProductOrder")]

        public async Task<IActionResult> ConfirmProductOrderById([FromQuery] string id)
        {
            await _orderService.HandleConfirmProductOrderById(id);
            return Ok();
        }

        [HttpGet]
        [Route("AllProductOrders")]

        public async Task<IActionResult> GetAllProductOrders([FromQuery] QueryParamsModel queryModel)
        {
            var validationResult = _validator.Validate(queryModel);
            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }
            int skip = (queryModel.page - 1) * queryModel.pageSize;
            var result = await _orderService.HandleGetAllProductOrders(skip, queryModel.pageSize);
            return Ok(result);
        }

        [HttpGet]
        [Route("ProductOrderById")]

        public async Task<IActionResult> GetProductOrderById([FromQuery] string id)
        {
            var result = await _orderService.HandleGetProductOrderById(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("SoldProductOrders")]

        public async Task<IActionResult> GetSoldProductOrders()
        {
            var result = await _orderService.HandleGetSoldProductOrders();
            return Ok(result);
        }

        [HttpPut]
        [Route("MarkProductAsSold")]

        public async Task<IActionResult> MarkProductAsSold([FromQuery] string id)
        {
            await _orderService.HandleMarkProductAsSold(id);
            return Ok();
        }

        [HttpGet]
        [Route("GetBuildOrdersByCustomer")]

        public async Task<IActionResult> GetBuildOrdersByCustomer([FromQuery] string id)
        {
            var result = await _orderService.HandleGetBuildOrdersByCustomer(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetProductOrdersByCustomer")]

        public async Task<IActionResult> GetProductOrdersByCustomer([FromQuery] string id)
        {
            var result = await _orderService.HandleGetProductOrdersByCustomer(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetOrdersCountByCustomer")]

        public async Task<IActionResult> GetOrdersCountByCustomer([FromQuery] string id)
        {
            var result = await _orderService.GetOrdersCountByCustomer(id);
            return Ok(result);
        }
    }
}
