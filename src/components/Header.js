import React from "react";

// Style
import '../scss/components/header.scss';

// Images
import logo from '../images/logo.svg';
import arrow from '../images/icon-arrow-down.svg';

// Components
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
            <div className="top">
                <img src={logo} alt="Sunnyside logo" className="top__logo" />
                <Navbar />
            </div>
            <div className="heading">
                <h1 className="heading__primary">We are creatives</h1>
                <img className="heading__arrow" alt="arrow down" src={arrow} />
            </div>
        </header>
    )
}