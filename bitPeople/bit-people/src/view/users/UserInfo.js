import React from 'react';


const UserInfo = (props) => {
//console.log(props.name );

    return (
        <div className="userInfo">
            <img src={props.element.img} className="photo" />
            <div className="userText">
                <p> name:{props.element.name} </p>
                <p> gender:{props.gender}</p>
                <p> id:{props.element.id}</p>
 
               
            </div>
            <hr />
        </div>
    )

}

export { UserInfo };