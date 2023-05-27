import React from "react";

export default function Figure(props) {
    return (
        <picture className={"full " + props.class}>
            <source media="(min-width:768px)" srcset={props.imgDesktop} />
            <img className="figure__img" src={props.imgMobile} alt={props.alt} />
        </picture>
    )
}