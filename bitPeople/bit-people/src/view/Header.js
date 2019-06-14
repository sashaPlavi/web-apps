import React from 'react';


const Header = (props) => {
    console.log(props);

    const icon = (props.buttonChange === "grid") ? "fas fa-grip-horizontal 7x" : "fas fa-list 7x"
    console.log(icon);

    return (
        <div className="postHeader">

            <h3>{props.text}</h3>
            <button className="buttonToChange" onClick={props.onHeaderClick}><i className={icon}></i></button>

        </div>
    )
}
export { Header }