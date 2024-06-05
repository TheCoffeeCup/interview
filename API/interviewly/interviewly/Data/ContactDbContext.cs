using interviewly.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace interviewly.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contact> Contacts {  get; set; }
    }
}
