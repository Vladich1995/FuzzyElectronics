namespace ScrapingAPI.Service.Models.Scraping.Mappings;
using CsvHelper.Configuration;
using CsvHelper.Configuration.Attributes;
using ScrapingAPI.Service.Models.Scraping.CsvProduct;

public class ProductMap : ClassMap<Product>
{
    public ProductMap()
    {
        // Map Hebrew column names to English property names using field indices
        Map(m => m.MakatMorLevi).Index(0);
        Map(m => m.MakatDeveloper).Index(1);
        Map(m => m.Description).Index(2);
        Map(m => m.Price).Index(3);
        Map(m => m.Category).Index(4);
        Map(m => m.Available).Index(5);
        Map(m => m.Developer).Index(6);
        Map(m => m.PictureURL).Index(7);
    }
}
