import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function Lines() {
    return (
        <div className="mainLine">
            <div className="linesTitles">
                <h2 className="linesTitle">Líneas de Llantas</h2>
                <p>Para todo lo que necesites</p>
            </div>
            <div className="linesContent">
                <div className="lineCard">
                    <StaticImage
                        src="../images/Assurance7.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="paddingAbout"
                    />
                    <h3 className="cardTitle">Assurance</h3>
                </div>
                <div className="lineCard">
                    <StaticImage
                        src="../images/WranglerLine.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="paddingAbout"
                    />
                    <h3 className="cardTitle">Wrangler</h3>
                </div>
                <div className="lineCard">
                    <StaticImage
                        src="../images/eagle.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="paddingAbout"
                    />
                    <h3 className="cardTitle">Eagle</h3>
                </div>
                <div className="lineCard">
                    <StaticImage
                        src="../images/EnduranceLine.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="paddingAbout"
                    />
                    <h3 className="cardTitle">Endurance</h3>
                </div>
            </div>
        </div>
    )
}