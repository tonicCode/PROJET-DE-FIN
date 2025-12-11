using Dal.Repositories;

using Models;

namespace Bll.Services
{
    public class userService :IUserService
    {

        private readonly IUsersRepository _userRepository;

        public userService(IUsersRepository userRepository)
        {
            _userRepository = userRepository;
        }
    
    
    
    public void post(UsersModel uM)
        {


            _userRepository.post(uM);

        }
    
    


    
    
    }
}
