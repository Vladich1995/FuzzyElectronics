namespace ProductsAPI.Service.Models.Request.Build
{
    public class BuildPart
    {
        public string CollectionName { get; set; }
        public string MakatMorLevi { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Category { get; set; }
        public string? Brand { get; set; }
        public string? Model { get; set; }
        public string PictureURL { get; set; }
    }
}
