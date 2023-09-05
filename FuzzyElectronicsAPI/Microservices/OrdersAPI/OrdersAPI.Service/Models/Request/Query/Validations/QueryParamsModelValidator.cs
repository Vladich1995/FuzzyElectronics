using FluentValidation;

namespace OrdersAPI.Service.Models.Request.Query.Validations
{
    public class QueryParamsModelValidator : AbstractValidator<QueryParamsModel>
    {
        public QueryParamsModelValidator()
        {
            RuleFor(x => x.page).GreaterThan(0);
            RuleFor(x => x.pageSize).GreaterThan(0);
        }
    }
}


