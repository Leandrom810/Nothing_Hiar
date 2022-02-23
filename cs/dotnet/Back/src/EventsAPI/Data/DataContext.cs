using EventsAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EventsAPI.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options){ }

        public DbSet<Event> Events { get; set; }


    }
}