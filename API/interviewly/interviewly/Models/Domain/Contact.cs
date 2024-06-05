namespace interviewly.Models.Domain
{
    public class Contact
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }
        public string? Email { get; set; }
        public required string Phone { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? PostalCode { get; set; }
        public string? Country { get; set; }
        public bool Favorite { get; set; }
    }
}
