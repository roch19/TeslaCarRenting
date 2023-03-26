namespace TeslaCarRenting.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public int Password { get; set; }
        public Payment Payment { get; set; }
        public List<Reservation> Reservations { get; set; }


    }
}
