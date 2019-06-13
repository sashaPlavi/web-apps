import React from 'react';


const UserInfo = (props) => {
console.log(props );

    return (
        <div className="userInfo">
            <img src={props.user.img} className="photo" alt='user '/>
            <div className="userText">
                <p> name:{props.user.name} </p>
                <p> gender:{props.user.gender}</p>
                <p> id:{props.user.id}</p>
 
               
            </div>
            <hr />
        </div>
    )

}

export { UserInfo };