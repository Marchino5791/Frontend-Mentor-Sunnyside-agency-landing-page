import React from "react";

export default function Client(props) {
    return (
        <div className="testimonial__client">
            <img src={props.img} alt={props.alt} className="testimonial__client__img" />
            <p className="testimonial__client__content">{props.content}</p>
            <h3 className="testimonial__client__name">{props.name}</h3>
            <p className="testimonial__client__jobTitle">{props.jobTitle}</p>
        </div>
    )
}