import React from "react"

export default function Projects(props) {
    return (
        <picture className="half" id={props.id}>
            <source media="(min-width: 768px)" srcSet={props.imgDesktop} />
            <img src={props.imgMobile} alt={props.alt} className={"projects__img"} />
        </picture>
    )
}