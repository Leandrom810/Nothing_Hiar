using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EventsAPI.Models;
using EventsAPI.Data;

namespace EventsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        
        /*public IEnumerable<Event> _event = new Event[]{
                    new Event(){
                    EventID = 1,
                    EventTheme = "INDIA",
                    Local = "Bahia",
                    Lot = "First Lot",
                    PeopleQTD = 250,
                    EventDate = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    ImageURL = "url://image"
                    },
                    new Event(){
                    EventID = 2,
                    EventTheme = "PAKISTAN",
                    Local = "Pernambuco",
                    Lot = "First Lot",
                    PeopleQTD = 350,
                    EventDate = DateTime.Now.AddDays(4).ToString("dd/MM/yyyy"),
                    ImageURL = "url://image1"
                    }
        };*/
        private readonly DataContext _context;
        public EventsController(DataContext context)
        {
           _context = context;
        }

        [HttpGet]
        
        public IEnumerable<Event> Get(){
            return _context.Events;
        }

        [HttpGet("{id}")]
        public Event Get(int id){
            return _context.Events.FirstOrDefault(x => x.EventID == id);
        }

        [HttpPost]

        public string Post(){
            return "Valor postado";
        }

        [HttpPut]

        public string Put(){
            return "Valor inserido";
        }
        
        [HttpDelete]

        public string Delete(){
            return "Valor deletado";
        }

    }
}
