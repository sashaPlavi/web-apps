import React from 'react';


const UserInfo = (props) => {
    console.log(props);



    return (
        <div className="userInfo">
            <img src={props.user.img} className="photo" alt='user ' />
            <div className="userText">
                <p> Name:{props.user.name} {props.user.lastname} </p>
                <p> Gender:{props.user.gender}</p>
                <p> Id:{props.user.id}</p>
                <p>Email :{props.user.hideEmail()}</p>


            </div>
            <hr />
        </div>
    )

}


export { UserInfo };