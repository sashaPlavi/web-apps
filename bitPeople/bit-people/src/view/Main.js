import React from 'react';
import { UserList } from './users/UserList';
    
const Main = (props) => {

    return (
        <main className="body">
            <UserList user={props.users} />
        </main>
    )
}
export { Main }
