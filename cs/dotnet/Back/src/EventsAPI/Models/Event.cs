namespace EventsAPI.Models
{
    public class Event
    {
        public int EventID { get; set; }

        public string Local { get; set; }

        public string EventDate { get; set; }

        public string EventTheme { get; set; }

        public int PeopleQTD { get; set; }

        public string Lot { get; set; }

        public string ImageURL { get; set; }



    }
}