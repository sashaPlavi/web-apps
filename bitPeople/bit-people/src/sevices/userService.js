import { MyUser } from '../enites/myUser'
import axios from 'axios'


class UserService {


    fetchUsers = () => {
        //const myUsers =[]

        return axios.get("https://randomuser.me/api/?results=50")
            .then(users => {
                   const Apiusers = users.data.results
                  console.log(Apiusers);
                  
                  // const myuser = new MyUser(name, lastname, gender, id, img, email, birthDate)
                  //myUsers.push(myuser)
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
                  
                 /*  const name = user.name.first;
                  const lastname = user.name.last
                  const gender = user.gender;
                  const id = user.id.name;
                  const img = user.picture.medium;
                  const email = user.email;
                  const birthDate = user.dob.date; */
            })
            


            
    }


}
// make a class from this.

export const userservices = new UserService;
