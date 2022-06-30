using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CryptoCurrency.Models
{
    public partial class CoinDbContext : DbContext
    {
        public CoinDbContext()
        {
        }

        public CoinDbContext(DbContextOptions<CoinDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Coin> Coins { get; set; } = null!;

    } 
}
