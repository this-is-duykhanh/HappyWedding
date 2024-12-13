namespace server.DTO
{
    public class PostGreeting
    {
        public string Sender { get; set; } = null!;

        public string Message { get; set; } = null!;

        public IFormFile? Image { get; set; }
    }
}
