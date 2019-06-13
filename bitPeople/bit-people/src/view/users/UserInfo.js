import React from 'react';


const UserInfo = (props) => {
    console.log(props);



    return (
        <div className="userList">
            <img src={props.user.img} className="photo" alt='user ' />
            <div className="userText">
                <p> Full Name:{props.user.name} {props.user.lastname} </p>
                <p>Email :{props.user.hideEmail()}</p>
                <p>Date of birth: {props.user.formatDate()} </p>



            </div>
            <hr />
        </div>
    )

}


export { UserInfo };