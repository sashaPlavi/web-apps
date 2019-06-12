 import {MyUser} from '../enites/myUser'

export const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=50")
        .then(response => response.json())
        .then(users =>users.results.map(user =>{

            const name = user.name.first;
            const gender = user.gender;
            const id = user.id.name;
            const img = user.picture.medium;
            
            const myUsers =[]
            const myuser = new MyUser ( name, gender, id, img )
            myUsers.push(myuser)  
            return myUsers


        })
        
        )}
            
 
        
         

