namespace CustomersAPI.Service.Services.DatabaseServices.Exceptions
{
    public class DuplicateEmailException : Exception
    {
        public DuplicateEmailException(string message) : base(message)
        {
        }
    }
}
