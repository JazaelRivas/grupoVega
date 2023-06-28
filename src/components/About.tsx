import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function About() {
    return (
        <div className="mainAbout">
            <div className="aboutText">
                <h2 className="aboutTitle">Quiénes somos</h2>
                <div className="aboutContent">
                    <p className="aboutFont">Llevamos orgullosamente 30 años brindando un servicio excepcional a nuestra comunidad.
                        Nos hemos convertido en tu llantería de confianza, siempre dispuestos a ofrecerte la mejor experiencia en el cuidado de tus llantas.
                    </p>
                    <p className="aboutFont"> Gracias por ser parte de nuestra historia de 30 años de servicio excepcional.</p>
                </div>

                <button className="aboutButton">
                    <StaticImage
                        src="../images/phone.png"
                        alt="telefono fijo"
                        layout="fixed"
                        width={20}
                        height={20}
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'cover' }}
                        className="paddingAbout"
                    />
                    Contactanos y cotiza tu servicio!
                </button>
            </div>
            <div className="aboutImage">
                <StaticImage
                    src="../images/alineacion.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    placeholder="blurred"
                    className="responsive-image"
                />
            </div>
        </div>
    )
}