using FluentValidation;
using ProductsAPI.Service.Models.Request.Query;

namespace FuzzyElectronics.Service
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


