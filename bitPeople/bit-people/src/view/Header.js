import React from 'react';


const Header = (props) => {
    const layoutIconClassName = props.isGrid
        ? "fas fa-list 7x"
        : "fas fa-grip-horizontal 7x";

    return (
        <div className="postHeader">

            <h3>React Users</h3>

            <button
                className="reload"
                onClick={props.onReloadClick}
            >
                <i class="fas fa-redo-alt"></i>
            </button>

            <button
                className="buttonToChange"
                onClick={props.onLayoutChange}
            >
                <span className="buttonMedium"><i className={layoutIconClassName}></i></span>
            </button>

        </div>
    )
}
export { Header }