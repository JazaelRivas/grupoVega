import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import WhatsappButton from './Button';
import ScrollToTopButton from './ScrollToTop';
import "../styles/global.scss"

export default function Detail() {

    const preguntaDinamica = "Hola, quisiera informes sobre  servicio de Alineacion y Balanceo";
    const preguntaDinamica1 = "Hola, quisiera informes sobre servicio de Suspension";
    const preguntaDinamica2 = "Hola, quisiera informes sobre servicio de Llantas";
    const preguntaDinamica3 = "Hola, quisiera informes sobre servicio de Frenos";
    return (
        <div className='mainDetail'>
            <a href="/" className="staticWhatsapp">
                <StaticImage
                    src="../images/whatsapp.png"
                    alt="contacto whatsapp"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    imgStyle={{ objectFit: 'cover' }}
                />
            </a>
            <div className='backgroundContainer'>
                <h2 className='title'>Servicios</h2>
                <StaticImage
                    src="../images/detail2.png"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className='headerImage'
                />
            </div>

            <div className='alineacion'>
                <div className='alineacionTitle'>
                    <h2>Alineación y Balanceo</h2>
                    <h3>Le damos a tu auto el balance que necesita para llevarte tan lejos como quieras llegar.</h3>
                    <WhatsappButton pregunta={preguntaDinamica} />
                </div>
                <StaticImage
                    src="../images/alineado.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="detailImage"
                />
            </div>
            <div className='alineacion'>
                <div className='alineacionTitle'>
                    <h2>Suspension</h2>
                    <h3>Ningún camino será rival para tu auto. Te ofrecemos lo mejor para la suspensión de tu vehículo.</h3>
                    <WhatsappButton pregunta={preguntaDinamica1} />
                </div>
                <StaticImage
                    src="../images/blog2.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="detailImage"
                />
            </div>
            <div className='alineacion'>
                <div className='alineacionTitle'>
                    <h2>Llantas</h2>
                    <h3>Dejamos tus llantas al 100 para que sigas rodando con seguridad.</h3>
                    <WhatsappButton pregunta={preguntaDinamica} />
                </div>
                <StaticImage
                    src="../images/blog5.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    objectPosition={'20%'}
                    className="detailImage"
                />
            </div>
            <div className='alineacion'>
                <div className='alineacionTitle'>
                    <h2>Frenos</h2>
                    <h3>Nos aseguramos de que tus frenos jamás te fallen.</h3>
                    <WhatsappButton pregunta={preguntaDinamica} />
                </div>
                <StaticImage
                    src="../images/blog4.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="detailImage"
                />
            </div>
            <ScrollToTopButton />
        </div>
    );
}
