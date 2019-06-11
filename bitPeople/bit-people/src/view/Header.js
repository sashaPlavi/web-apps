import React from 'react';


const Header = (props) => {
    return (<React.Fragment>
        <div className="postHeader">
            <h3>{props.text}</h3>
        </div>
    </React.Fragment>
    )
}
export { Header }