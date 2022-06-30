using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ninject.Activation;
using Microsoft.Extensions.Logging;
using CryptoCurrency.Models;

namespace CryptoCurrency.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinController : ControllerBase
    {
        private readonly IContext<CoinController> _Context;
        public CoinController(Logger<CoinController>logger)
        {
            _Context = Context;
        }

        [HttpGet("get-all-books")]
        public IActionResult GetAllCoin()
        {
            var allCoin = _logger.GetAllCoin();
            return Ok(allCoin);
        }
        [HttpPost("add-Coin")]
        public IActionResult AddCoin([fromBody])
        {
            _logger.AddCoin(Coin);
            return Ok();
        }
    }
}
