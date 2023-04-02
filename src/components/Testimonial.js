import React from "react";
import Client from "./Client";

// file js
import list from "../clintList"

export default function Testimonial() {

    const listElement = list.map(client => {
        return <Client
            key={client.id}
            img={client.img}
            alt={client.alt}
            content={client.content}
            name={client.name}
            jobTitle={client.jobTitle}
        />
    })

    return (
        <section className="testimonial">
            <h2 className="testimonial__title">Client testimonials</h2>
            {listElement}
        </section>
    )
}