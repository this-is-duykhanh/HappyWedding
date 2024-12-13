using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Database;
using server.DTO;
using server.Models;
using AutoMapper;
using System.Globalization;
using System.Text;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GreetingsController : ControllerBase
    {
        private readonly HappyWeddingContext _context;
        private readonly IMapper _mapper;

        public GreetingsController(HappyWeddingContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Greetings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Greeting>>> GetGreetings()
        {
            return await _context.Greetings.ToListAsync();
        }

        // GET: api/Greetings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Greeting>> GetGreeting(int id)
        {
            var greeting = await _context.Greetings.FindAsync(id);


            if (greeting == null)
            {
                return NotFound();
            }

            return greeting;
        }

        // PUT: api/Greetings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGreeting(int id, Greeting greeting)
        {
            if (id != greeting.Id)
            {
                return BadRequest();
            }

            _context.Entry(greeting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GreetingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Greetings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Greeting>> PostGreeting([FromForm] PostGreeting greeting)
        {
            if (greeting == null)
            {
                return BadRequest("Invalid data.");
            }

            var MapGreeting = _mapper.Map<Greeting>(greeting);


            if (greeting.Image != null && greeting.Image.Length > 0)
            {
                var imagesFolder = Path.Combine("wwwroot", "images"); // Folder to store the image
                Directory.CreateDirectory(imagesFolder); // Ensure the folder exists


                // Add a unique identifier (e.g., GUID) to avoid file name collisions
                var uniqueFileName = $"{Guid.NewGuid()}_{Path.GetFileName(greeting.Image.FileName)}";

                var filePath = Path.Combine(imagesFolder, uniqueFileName);

                // Save the image file to the specified path
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await greeting.Image.CopyToAsync(fileStream);
                }

                // Optionally, save the file path or metadata in the database
                MapGreeting.Image = uniqueFileName;
            }


            await _context.Greetings.AddAsync(MapGreeting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGreeting", new { id = MapGreeting.Id }, greeting);
        }

        // DELETE: api/Greetings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGreeting(int id)
        {
            var greeting = await _context.Greetings.FindAsync(id);
            if (greeting == null)
            {
                return NotFound();
            }

            _context.Greetings.Remove(greeting);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GreetingExists(int id)
        {
            return _context.Greetings.Any(e => e.Id == id);
        }
    }
}
