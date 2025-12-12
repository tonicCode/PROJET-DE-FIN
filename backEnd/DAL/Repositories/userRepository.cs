using System.Reflection.Metadata;
using Models;

using Microsoft.Data.SqlClient;
using System.Data;

namespace Dal.Repositories
{
    public class userRepository : IUsersRepository
    {

        private readonly string _dataString="Data Source=GOS-VDI203\\TFTIC;Initial Catalog=DatabaseWriteApp;Integrated Security=True;Connect Timeout=60;Encrypt=True;Trust Server Certificate=True;Application Intent=ReadWrite;Multi Subnet Failover=False";





       public void post(UsersModel um)
        {


            using(SqlConnection connection=new SqlConnection(_dataString))
            {

                using (SqlCommand cmd = new SqlCommand("toPost", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    connection.Open();
                    cmd.ExecuteNonQuery();



                }




            }







        }
       







    }
}
