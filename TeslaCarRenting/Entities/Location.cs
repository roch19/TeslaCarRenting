﻿namespace TeslaCarRenting.Entities
{
    public class Location
    {
        public int Id { get; set; }
        public string Adress { get; set; }
        public string Name { get; set; }
        public List<Car> Cars { get; set; }

    }
}
