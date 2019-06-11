import React from 'react';
const Footer = () => {
    const time = new Date().getFullYear();
    console.log(time);

    return (

        <footer className="footer">
            <p>&copy;{time}</p>
        </footer>
    )
}
export { Footer }