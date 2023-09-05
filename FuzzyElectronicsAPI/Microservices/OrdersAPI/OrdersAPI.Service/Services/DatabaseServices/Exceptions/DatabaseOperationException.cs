namespace OrdersAPI.Service.Services.DatabaseServices.Exceptions
{
    public class DatabaseOperationException : Exception
    {
        public DatabaseOperationException(string message) : base(message)
        {
        }
    }
}
