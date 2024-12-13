using AutoMapper;

namespace server.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<DTO.PostGreeting, Models.Greeting>();
        }

    }
}
