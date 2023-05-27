import React from "react";

// Style
import "../scss/components/navbar.scss"

// Img
import hamburger from "../images/hamburger.svg";

export default function Navbar() {
    let [menuOpen, setMenu] = React.useState(false);

    function toggle() {
        setMenu(prevMenu => !prevMenu)
    }

    return (
        <div>
            <img src={hamburger} alt="open and close the menu" className="top__hamburger" onClick={toggle} />
            <nav style={menuOpen ? { display: "block" } : { display: "none" }}>
                <div className="triangle" />
                <ul className="navbar-list">
                    <li className="navbar-list__item"><a href="#about" onClick={toggle}>About</a></li>
                    <li className="navbar-list__item"><a href="#services" onClick={toggle}>Services</a></li>
                    <li className="navbar-list__item"><a href="#projects" onClick={toggle}>Projects</a></li>
                    <li className="navbar-list__item "><a className="btn" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}