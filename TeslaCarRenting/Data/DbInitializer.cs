using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Drawing;
using TeslaCarRenting.Entities;

namespace TeslaCarRenting.Data
{
    public class DbInitializer
    {
        public static void Initialize(RentContext context)
        {

            //var user = new List<Customer>
            //{  new Customer
            //{
            //    Id = 1,
            //    Email = "user@site.com",
            //    Name= ""

            //}
            //}
            if (context.Cars.Any()) return;

            var cars = new List<Car>
            {
                new Car{
                Make = "Tesla",
                Model = "Model S",
                NumberOfSits = 5,
                Picture = "https://www.electrifying.com/files/NRCDj4KPiMVa8pTo/Tesla-Model-3.png",
                Color = "White"
                },
                  new Car{
                Make = "Tesla",
                Model = "Model S",
                NumberOfSits = 5,
                Picture = "https://www.electrifying.com/files/NRCDj4KPiMVa8pTo/Tesla-Model-3.png",
                Color = "White"
                },
                    new Car{
                Make = "Tesla",
                Model = "Model S",
                NumberOfSits = 5,
                Picture = "https://www.electrifying.com/files/NRCDj4KPiMVa8pTo/Tesla-Model-3.png",
                Color = "White"
                },
                      new Car{
                Make = "Tesla",
                Model = "Model S",
                NumberOfSits = 5,
                Picture = "https://www.electrifying.com/files/NRCDj4KPiMVa8pTo/Tesla-Model-3.png",
                Color = "White"
                },
                        new Car{
                Make = "Tesla",
                Model = "Model S",
                NumberOfSits = 5,
                Picture = "https://www.electrifying.com/files/NRCDj4KPiMVa8pTo/Tesla-Model-3.png",
                Color = "White"
                },
                          new Car{
                Make = "Tesla",
                Model = "Model X",
                NumberOfSits = 7,
              Picture = "https://www.pngmart.com/files/22/Tesla-Model-X-PNG-Transparent.png",
                Color = "White"
                },
                            new Car{
                Make = "Tesla",
                Model = "Model X",
                NumberOfSits = 7,
               Picture = "https://www.pngmart.com/files/22/Tesla-Model-X-PNG-Transparent.png",
                Color = "White"
                },
                              new Car{
                Make = "Tesla",
                Model = "Model X",
                NumberOfSits = 7,
          Picture = "https://assets.stickpng.com/images/580b585b2edbce24c47b2ccd.png",
                Color = "White"
                },
                                new Car{
                Make = "Tesla",
                Model = "Model X",
                NumberOfSits = 7,
              Picture = "https://assets.stickpng.com/images/580b585b2edbce24c47b2ccd.png",
                Color = "White"
                },
                                  new Car{
                Make = "Tesla",
                Model = "Model X",
                NumberOfSits = 7,
                Picture = "https://assets.stickpng.com/images/580b585b2edbce24c47b2ccd.png",
                Color = "White"
                },
            };

            foreach (var car in cars)
            {
                context.Cars.Add(car);
            }

            context.SaveChanges();
        }
    }
}
