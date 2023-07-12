import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function Inclusion() {
    return (
        <div className="mainInclusion">
            <div className="inclusionImage">
                <div className="paralelImage"><StaticImage
                    src="../images/3662.png"
                    alt="telefono fijo"
                    layout="fullWidth"
                    formats={['auto', 'webp', 'avif']}
                    className="paralleImagery"
                    objectPosition={'right'}
                /></div>
                <div className="paralelImage"><StaticImage
                    src="../images/inclusion2.jpg"
                    alt="telefono fijo"
                    layout="fullWidth"
                    formats={['auto', 'webp', 'avif']}
                    className="paralleImagery"
                /></div>
            </div>
            <div className="aboutText">
                <h2 className="aboutTitle">Quiénes somos.</h2>
                <div className="aboutContent">
                    <h3 className="aboutFont">Llevamos orgullosamente 30 años brindando un servicio excepcional a nuestra comunidad.
                        Nos hemos convertido en tu llantera de confianza, siempre dispuestos a ofrecerte la mejor experiencia en el cuidado de tus llantas.
                    </h3>
                </div>

                <button className="aboutButton">
                    <StaticImage
                        src="../images/whatsapp.png"
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