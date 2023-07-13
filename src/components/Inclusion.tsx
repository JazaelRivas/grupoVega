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
                <h2 className="aboutTitle">Viaja seguro</h2>
                <div className="aboutContent">
                    <h3 className="aboutFont">En estas vacaciones, no comprometas la seguridad de tus seres queridos. Nuestros centros de servicio ofrecen llantas de calidad y expertos en revisión de seguridad para que disfrutes de un viaje sin preocupaciones. 
                    Confía en nosotros para brindarte servicios confiables y productos de primera para tu vehículo.
                    </h3>
                </div>

                <button className="aboutButton">
                    <StaticImage
                        src="../images/whatsapp1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'fill' }}
                        className="aboutButtonWhatsapp"
                    />
                    Contactanos y cotiza!
                </button>
            </div>
        </div>
    )
}