import { MyUser } from '../enites/myUser'

export const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then((response) => makeMyobj(response)
        
    }



constmakeMyobj = (array) => {
    return array.map ( user => {
        const name = user.name.first;
        const gender = user.gender;
        const id = user.id.name;
            

return new MyUser{ name, gender, id }      

}


    // loop apiUsers
    // transform each apiUser to User object

    // return array of User objects
});
}
