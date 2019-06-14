import React from 'react';
import { UserList } from './users/UserList';

const Main = (props) => {
    //console.log(props);

    return (
        <main className="body">
            <UserList user={props.users} changeClass={props.changeClass} />
        </main>
    )
}
export { Main }
