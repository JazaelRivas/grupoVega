import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function About() {
    return (
        <div className="mainAbout">
            <div className="aboutText">
                <h2 className="aboutTitle">Quiénes somos.</h2>
                <div className="aboutContent">
                    <h3 className="aboutFont">Llevamos orgullosamente 30 años brindando un servicio excepcional a nuestra comunidad.
                        Nos hemos convertido en tu llantera de confianza, siempre dispuestos a ofrecerte la mejor experiencia en el cuidado de tus llantas.
                    </h3>
                    <p className="aboutFont"> Gracias por ser parte de nuestra historia de 30 años de servicio excepcional.</p>
                </div>

                <button className="aboutButton">
                    <StaticImage
                        src="../images/whatsapp.png"
                        alt="boton whatsapp"
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
            <div className="aboutImage">
                <div className="paralelImage"> <StaticImage
                    src="../images/3667.jpg"
                    alt="telefono fijo"
                    layout="fullWidth"
                    formats={['auto', 'webp', 'avif']}
                    className="paralleImagery"
                /></div>
                 <div className="paralelImage"> <StaticImage
                    src="../images/alineacion.jpg"
                    alt="telefono fijo"
                    layout="fullWidth"
                    formats={['auto', 'webp', 'avif']}
                    className="paralleImagery"
                /></div>
            </div>
        </div>
    )
}