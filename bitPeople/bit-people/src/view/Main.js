import React from 'react';
import { UserListItem } from './users/UserListItem';
import { UserCard } from './users/UserCard';
import { dropdown} from './Dropdown'

const Main = (props) => {
    console.log(props);
    
     
    return (
        <main className="body">
          <input 
          type = 'text' 
          
          placeholder= 'search users'
          size = '50'
           onChange= {props.searchUsersOnChange} 
           />
            
                <div className= 'dropdown'>
                  
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
