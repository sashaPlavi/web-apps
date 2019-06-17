import { MyUser } from '../enites/myUser'
import axios from 'axios'


class UserService {


    fetchUsers = () => {
         

        return axios.get("https://randomuser.me/api/?results=50")
            .then(users => {
                   const Apiusers = users.data.results
                  console.log(Apiusers);
                  const myUsers= Apiusers.map(user => new MyUser(user.name.first,
                         user.name.last,
                         user.gender,
                         user.id.name,
                         user.picture.medium,
                         user.email,
                         user.dob.date) )
                    console.log(myUsers);
                    
                    return myUsers
                  
                   
                  
                 
            })
            


            
    }


}
// make a class from this.

export const userservices = new UserService;
