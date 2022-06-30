using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CryptoCurrency.Models
{
    [Keyless]
    [Table("Coin")]
    public partial class Coin
    {
        public int? Id { get; set; }
        [StringLength(200)]
        public string? Name { get; set; }
        [Column(TypeName = "decimal(20, 2)")]
        public decimal? Price { get; set; }
    }
}
