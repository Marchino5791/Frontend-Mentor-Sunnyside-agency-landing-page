import React from "react";

export default function Services(props) {
    return (
        <section className={"services full " + props.background} id={props.id}>
            <h2 className={"services__title " + props.textColor}>{props.title}</h2>
            <p className={"services__paragraph " + props.textColor}>{props.paragraph}</p>
        </section>
    )
}