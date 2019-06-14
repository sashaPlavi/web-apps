import React from 'react';


const UserInfo = (props) => {
    //console.log(props);

    const female = (props.user.isFemale()) ? "userText-f" : "userText";
    console.log(female);


    return (
        <div className={props.changeClass}>
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


export { UserInfo };