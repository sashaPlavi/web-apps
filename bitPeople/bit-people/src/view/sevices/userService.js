import { MyUser } from '../enites/myUser'
import axios from 'axios'


export const fetchUsers = () => {

    return axios.get("https://randomuser.me/api/?results=50")
        .then(users => users.data.results.map(user => {
            //  console.log(user);

            const name = user.name.first;
            const lastname = user.name.last
            const gender = user.gender;
            const id = user.id.name;
            const img = user.picture.medium;
            const email = user.email;
            const birthDate = user.dob.date;

            const myuser = new MyUser(name, lastname, gender, id, img, email, birthDate)

            return myuser
        })



        )
}





