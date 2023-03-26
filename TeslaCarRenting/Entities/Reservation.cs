namespace TeslaCarRenting.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public Location ReturnPlace { get; set; }
        public Location RentPlace { get; set; }
        public Car Car { get; set; }

    }
}
