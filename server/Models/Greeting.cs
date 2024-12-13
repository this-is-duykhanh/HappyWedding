using System;
using System.Collections.Generic;

namespace server.Models;

public partial class Greeting
{
    public int Id { get; set; }

    public string Sender { get; set; } = null!;

    public string Message { get; set; } = null!;

    public string? Image { get; set; }

    public DateTime CreatedAt { get; set; }
}
