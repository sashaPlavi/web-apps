import { MyUser } from '../enites/myUser'
import axios from 'axios'

export const fetchUsers = () => {

    return axios.get("https://randomuser.me/api/?results=50")
        .then(users => users.data.results.map(user => {

            const name = user.name.first;
            const gender = user.gender;
            const id = user.id.name;
            const img = user.picture.medium;

            const myuser = new MyUser(name, gender, id, img)

            return myuser
        })



        )
}





