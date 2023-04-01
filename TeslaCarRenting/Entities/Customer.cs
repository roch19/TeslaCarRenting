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
        public List<Reservation> Reservations { get; set; } = new();
        

        public void CreateNewReservation(DateTime dateTimeStart, DateTime dateTimeStop, Location rentPlace, Location returnPlace, Car car, decimal totalCost )
        {
            if(Reservations.All(item=> item.Car.Id != car.Id))
            {
                Reservations.Add(new Reservation
                {
                    DateStart = dateTimeStart,
                    DateEnd = dateTimeStop,
                    RentPlace = rentPlace,
                    ReturnPlace = rentPlace,
                    Car = car,
                    TotalCost = car.Price.PriceForHour * (((int)(dateTimeStart - dateTimeStop).TotalHours))
                }) ;
            }
        }

        public void RemoveResevation(int resevationId)
        {
            var item = Reservations.FirstOrDefault(item => item.Id == resevationId);
            if (item == null) return;
            Reservations.Remove(item);
        }
    }
}
