using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuyuFitness.Data;

namespace NuyuFitness.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactPageController : ControllerBase
    {
        private string _connectionString;

        public ContactPageController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("add")]
        [HttpPost]
        public void Add(Inquiry inquiry)
        {
            var repo = new ContactPageRepository(_connectionString);
            repo.Add(inquiry);
        }

    }
}
