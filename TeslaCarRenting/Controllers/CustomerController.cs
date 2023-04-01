using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeslaCarRenting.Data;
using TeslaCarRenting.Entities;

namespace TeslaCarRenting.Controllers
{
    public class CustomerController : BaseApiController
    {
        private readonly RentContext context;

        public CustomerController(RentContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Reservation>> GetReservation()
        {
            var reservation = await context.Customers
                .Include(r => r.Reservations)
                .ThenInclude(tc => tc.TotalCost)
                .FirstOrDefaultAsync(x => x.Id.ToString() == Request.Cookies["Id"]);

            if(reservation == null) return NotFound();
            
            return Ok(reservation);
        }

        [HttpPost]
        public async Task<ActionResult> CreateNewReservation()
        {
            // -- Searching --
            // get iputs results
            // chcek if exist any car for this query
            // output "ok" then... or  return NotFOund()

            //-- Create new Reservation -- 
            // get imputs from localisation 
            // get imputs about date 
            // get info abotu car -> car id ? 
            // cout info about totalcost
            // save changes 

            return StatusCode(201);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteReservation(int reservationId)
        {
            // get reservation
            // remove reservation from db
            // save changes
            return StatusCode(201);
        }
    }
}
