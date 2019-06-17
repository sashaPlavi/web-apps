import React from 'react';
import { UserListItem } from './users/UserListItem';
import { UserCard } from './users/UserCard';

const Main = (props) => {
    const userList = props.users

    const renderUser = (user) => {
        if (props.isGridLayout) {
            return <UserCard user={user} />
        }

        return <UserListItem user={user} />;
    }

    const usersJsx = userList.map((user) => {
        return renderUser(user)
    })

    return (
        <main className="body">
            <span className="fafa"><i className="fa fa-search"></i></span>
            <input className="inputPlace"
                type='text'
                placeholder='search users'
                size='50'
                onChange={props.searchUsersOnChange} />
            {usersJsx}
        </main>
    )
}
export { Main }
