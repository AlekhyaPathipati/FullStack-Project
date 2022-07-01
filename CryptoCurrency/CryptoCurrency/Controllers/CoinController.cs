using CryptoCurrency.Models;
using Microsoft.AspNetCore.Mvc;

namespace CryptoCurrency.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinController : ControllerBase
    {

        CoinDbContext DbContext=new CoinDbContext()
       
         [HttpGet]
        public  Coin GetCoin()
        {
            Coin coin = new Coin();
        }

    }
}
