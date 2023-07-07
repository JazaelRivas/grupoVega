import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"


export default function Services() {
    return (
        <div className="mainServices">
            <h2 className="servicesTitle">Servicios.</h2>
            <h3 className="servicesSubtitle">Viaja con confianza y seguridad en cada camino, gracias a nuestros servicios especializados.</h3>
            <div className="servicesContent">
                <div className="serviceCard">
                    <StaticImage
                        src="../images/amortiguador.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="servicesImage"
                    />
                    <h3>Suspension.</h3>
                    <p>Ningún camino será rival para tu auto. Te ofrecemos lo mejor para la suspensión de tu vehículo.</p>
                    <button className="servicesButton">
                        <StaticImage
                            src="../images/tyre.png"
                            alt="telefono fijo"
                            height={20}
                            layout="fixed"
                            formats={['auto', 'webp', 'avif']}
                            className="serviceImageButton"
                        />
                        Ver más
                    </button>
                </div>
                <div className="serviceCard">
                    <StaticImage
                        src="../images/balanceo.png"
                        alt="telefono fijo"
                        layout="constrained"                        
                        formats={['auto', 'webp', 'avif']}
                        className="servicesImage"
                    />
                    <h3>Alineacion y Balanceo.</h3>
                    <p>Le damos a tu auto el balance que necesita para llevarte tan lejos como quieras llegar.</p>
                    <button className="servicesButton">
                        <StaticImage
                            src="../images/tyre.png"
                            alt="telefono fijo"
                            height={20}
                            layout="fixed"
                            formats={['auto', 'webp', 'avif']}
                            className="serviceImageButton"
                        />
                        Ver más
                    </button>
                </div>
                <div className="serviceCard">
                    <StaticImage
                        src="../images/eagle.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="servicesImage"
                    />
                    <h3>Llantas.</h3>
                    <p>Dejamos tus llantas al 100 para que sigas rodando con seguridad.</p>
                    <button className="servicesButton">
                        <StaticImage
                            src="../images/tyre.png"
                            alt="telefono fijo"
                            height={20}
                            layout="fixed"
                            formats={['auto', 'webp', 'avif']}
                            className="serviceImageButton"
                        />
                        Ver más
                    </button>
                </div>
                <div className="serviceCard">
                    <StaticImage
                        src="../images/brakes1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="servicesImage"
                    />
                    <h3>Frenos.</h3>
                    <p>Nos aseguramos de que tus frenos jamás te fallen.</p>
                    <button className="servicesButton">
                        <StaticImage
                            src="../images/tyre.png"
                            alt="telefono fijo"
                            height={20}
                            layout="fixed"
                            formats={['auto', 'webp', 'avif']}
                            className="serviceImageButton"
                        />
                        Ver más
                    </button>
                </div>
            </div>
        </div>
    )
}