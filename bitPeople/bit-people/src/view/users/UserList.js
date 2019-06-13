import React from 'react';
import { UserInfo } from './UserInfo'


const UserList = (props) => {
    console.log(props);
    
    return (
        <div>
            {props.user.map((res, i) => <UserInfo user={res} key={i} />)}
        </div>
    )
}

export { UserList };