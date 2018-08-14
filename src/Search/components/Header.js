import React from "react";
import Image from '../../static/logo.png';

const Header = () => {
    return (
        <header className="App-header hbox space-between">
            <nav/>
            <article>
                <img src={Image} className="logo" alt="logo"/>
            </article>

            <aside/>
        </header>
    );
}

export default Header;