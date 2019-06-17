import React from 'react';


const UserCard = (props) => {
    const female = (props.user.isFemale()) ? "userText-f" : "userText";
    console.log(props);


    return (
        <div className="grid">
            <img src={props.user.img} className="photo" alt='user ' />
            <div className={female}  >
                <p> Full Name:{props.user.fullName()} </p>
                <p>Email :{props.user.hideEmail()}</p>
                <p>Date of birth: {props.user.formatDate()} </p>
            </div>
            <hr />
        </div>
    )

}


export { UserCard };