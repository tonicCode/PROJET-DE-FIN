using Microsoft.AspNetCore.Mvc;
using Bll.Services;
using Models;

namespace MonApi.Controllers
{
    [ApiController]
    [Route("API[controller]")]

    public class usersController : Controller
    {


       private readonly IUserService _userSeervice;



       
        [HttpPost]


        public IEnumerable<UsersModel> post()
        {






            return Ok();
        }
    }
}
