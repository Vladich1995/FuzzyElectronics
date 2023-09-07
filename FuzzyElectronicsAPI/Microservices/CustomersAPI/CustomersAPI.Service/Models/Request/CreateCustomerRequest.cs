namespace CustomersAPI.Service.Models.Request
{
    public class CreateCustomerRequest
    {
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
