using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeslaCarRenting.Data;
using TeslaCarRenting.Entities;

namespace TeslaCarRenting.Controllers
{
    [ApiController]
    [Route("teslaCarRenting/[controller]")]
    public class CarsControler : ControllerBase
    {
        private readonly RentContext _context;
        public CarsControler(RentContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task< ActionResult<List<Car>>> GetCars() 
        {
           return await _context.Cars.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            return await _context.Cars.FindAsync(id);
        }


    }
}
