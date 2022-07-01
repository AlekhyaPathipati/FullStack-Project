using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CryptoCurrency.Models;

namespace CryptoCurrency.Models
{
    public partial class CoinDbContext : DbContext
    {
        public CoinDbContext(DbContextOptions<CoinDbContext>options) : base(options)
        {
        }

        public DbSet<Coin> Coins { get; set; } 

    } 
}
