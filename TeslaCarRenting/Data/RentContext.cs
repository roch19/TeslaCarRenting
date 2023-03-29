using Microsoft.EntityFrameworkCore;
using TeslaCarRenting.Entities;

namespace TeslaCarRenting.Data
{
    public class RentContext : DbContext
    {
        public RentContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Car> Cars{ get; set; }
    }
}
