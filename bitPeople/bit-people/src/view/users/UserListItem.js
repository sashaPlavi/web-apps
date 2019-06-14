import React from 'react';


const UserListItem = (props) => {
    const female = (props.user.isFemale()) ? "userText-f" : "userText";

    return (
        <div className="list">
            <img src={props.user.img} className="photo" alt='user ' />
            <div className={female}  >
                <p> Full Name:{props.user.name} {props.user.lastname} </p>
                <p>Email :{props.user.hideEmail()}</p>
                <p>Date of birth: {props.user.formatDate()} </p>
            </div>
            <hr />
        </div>
    )

}


export { UserListItem };