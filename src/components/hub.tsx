import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import VideoComponent from "./VideoComponent"
import Navbar from "./Navbar"

import "../styles/global.scss"
export default function Hub() {
    return (
        <div className="mainHub">
            <Navbar/>
            <div className="hubLogo" >
                <StaticImage
                    src="../images/image.webp"
                    alt="telefono fijo"
                    loading="lazy"
                    layout="fixed"
                    width={700}
                    height={200}
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