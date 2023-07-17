import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import VideoComponent from "./VideoComponent"
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Navbar from "./Navbar"

import "../styles/global.scss"
export default function Hub() {
    const handleScrollToSection = (sectionId: string) => {
        scroll.scrollTo(Number(sectionId), {
          duration: 1,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      };
    
    
    return (
        <div className="mainHub">
            <Navbar scrollToSection={handleScrollToSection}/>
            <div className="hubLogo" >
                <StaticImage
                    src="../images/image.webp"
                    alt="telefono fijo"
                    loading="lazy"
                    layout="constrained"
                    width={700}
                    height={400}
                    formats={['auto', 'webp', 'avif']}
                    imgStyle={{ objectFit: 'fill' }}
                />
            </div>
            <div>
                <VideoComponent/>
            </div>
        </div>
    )
}