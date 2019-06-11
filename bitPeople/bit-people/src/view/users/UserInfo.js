import React from 'react';


const UserInfo = (props) => {

    return (
        <div className="userInfo">
            <img src={props.element.picture.medium} className="photo" />
            <div className="userText">
                <p> name:{props.element.name.first} {props.element.name.last}</p>
                <p> email:{props.element.email}</p>
                <p> age:{props.element.dob.age}</p>

                <p> ctiy:{props.element.location.city}</p>
                <p> gender:{props.element.gender}</p>
            </div>
            <hr />
        </div>
    )

}

export { UserInfo };