using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore22.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class WindowsController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(HttpContext.User.Identity.Name);
        }
    }
}