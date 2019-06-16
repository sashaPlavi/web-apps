import React from 'react';
import { UserListItem } from './users/UserListItem';
import { UserCard } from './users/UserCard';
import { Dropdown} from './Dropdown'
 

const Main = (props) => {
    console.log(props);
      
     const isSearching= props.searchList
     console.log(isSearching);
     
     
    return (
        <main className="body">
          <input 
          type = 'text' 
          
          placeholder= 'search users'
          size = '50'
           onChange= {props.searchUsersOnChange} 
           />
            
                <div className= 'dropdown'>
                     <Dropdown list = {isSearching}/>
              </div> 
            
  
          
            {props.users.map(user => {
                if (props.isGridLayout) {
                    return <UserCard user={user} />
                }

                return <UserListItem user={user} />;
            })}
        </main>
    )
}
export { Main }
