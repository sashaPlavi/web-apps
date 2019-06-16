import React from 'react'


 export const Dropdown =(props) =>{
  
console.log(props)

const list = props.list
const listItems = 
list.map((user)=>
<li className= 'dropdownLi'>
<img src={user.img} className="photo" alt='user ' />
<p>{user.name} {user.lastname} email :{user.hideEmail()} </p>
</li>
)
return (
  <ul className ='dropdown'>{listItems}</ul>
)
  


 }
  


 