using Microsoft.AspNetCore.Mvc;
using Bll.Services;

using Models;

namespace MonApi.Controllers
{
    [ApiController]
    [Route("API[controller]")]

    public class usersController : Controller
    {


       private readonly IUserService _userService;

        public usersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]


        public IActionResult post([FromBody] UsersModel um)
        {

            _userService.post(um);




            return Ok(um);
        }
    }
}
