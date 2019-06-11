import React from 'react';
import { UserInfo } from './UserInfo'


const UserList = (props) => {
    return (
        <div>
            {props.user.map((res, i) => <UserInfo element={res} key={i} />)}
        </div>
    )
}

export { UserList };