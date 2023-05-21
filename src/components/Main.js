import React from "react";

// Style
import "../scss/components/main.scss"

// Components
import Figure from "./Figure";
import About from "./About"
import Services from "./Services"
import Testimonial from "./Testimonial";
import Projects from "./Projects";

// Img
import eggMobile from "../images/mobile/image-transform.jpg";
import eggDesktop from "../images/desktop/image-transform.jpg";
import lampMobile from "../images/mobile/image-stand-out.jpg";
import lampDesktop from "../images/desktop/image-stand-out.jpg";
import milkMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import milkDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import coneMobile from "../images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../images/desktop/image-gallery-cone.jpg";
import sugarMobile from "../images/mobile/image-sugar-cubes.jpg";
import sugarDesktop from "../images/desktop/image-sugarcubes.jpg";

export default function Main() {
    return (
        <main>
            <Figure
                imgMobile={eggMobile}
                imgDesktop={eggDesktop}
                alt={"egg"}
                class={"second"}
            />

            <About
                id={"about"}
                title={"Transform your brand"}
                paragraph={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}
                color={"yellow"}
                class={"first"}
            />

            <Figure
                imgMobile={lampMobile}
                imgDesktop={lampDesktop}
                alt={"floor lamp"}

            />

            <About
                title={"Stand out to the right audience"}
                paragraph={" Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."}
                color={"soft-red"}
            />

            <Services
                id={"services"}
                background={"graphic"}
                textColor={"graphic-text"}
                title={"Graphic design"}
                paragraph={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."}
            />

            <Services
                background={"photography"}
                textColor={"photography-text"}
                title={"Photography"}
                paragraph={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
            />

            <Testimonial />

            <Projects
                id={"projects"}
                imgMobile={milkMobile}
                imgDesktop={milkDesktop}
                alt={"3 bottles of milk with sky as background"}
            />

            <Projects
                imgMobile={orangeMobile}
                imgDesktop={orangeDesktop}
                alt={"half orange in the middle of the plate"}
            />

            <Projects
                imgMobile={coneMobile}
                imgDesktop={coneDesktop}
                alt={"a cone"}
            />

            <Projects
                imgMobile={sugarMobile}
                imgDesktop={sugarDesktop}
                alt={"cube of sugar organize in a creative way"}
            />
        </main>
    )
}