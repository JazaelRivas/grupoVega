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
            <div className="trendsContainerButton">
                <button className="trendsButton">
                    <StaticImage
                        src="../images/phone.png"
                        alt="telefono fijo"
                        layout="fixed"
                        width={20}
                        height={20}
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="paddingAbout"
                    />
                    Contactanos y cotiza!
                </button>
            </div>
        </div>
    )
}