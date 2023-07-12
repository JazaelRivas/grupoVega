import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function Trend() {
    return (
        <div className="mainTrend">
            <StaticImage
                src="../images/trends.png"
                alt="telefono fijo"
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                imgStyle={{ objectFit: 'fill' }}
                class="trendImage"
            />
            <div className="mobileTrend">
                <StaticImage
                    src="../images/mobileTrend.png"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    imgStyle={{ objectFit: 'fill' }}
                   
                />
            </div>
        </div>
    )
}