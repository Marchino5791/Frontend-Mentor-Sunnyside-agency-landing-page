import React from "react";

export default function About(props) {
    return (
        <div className={"about full " + props.class} id={props.id}>
            <section className="about__text-box">
                <h2 className="about__text-box__title">{props.title}</h2>
                <p className="about__text-box__paragraph">{props.paragraph}</p>
                <div className="about__text-box__link">
                    <a className="about__text-box__link-box__link" href="#">Lear More</a>
                    <div className={"decoration " + props.color} />
                </div>
            </section>
        </div>
    )
}