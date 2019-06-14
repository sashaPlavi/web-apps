import React from 'react';
import { UserListItem } from './users/UserListItem';
import { UserCard } from './users/UserCard';

const Main = (props) => {
    return (
        <main className="body">
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
