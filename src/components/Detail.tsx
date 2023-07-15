import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.scss"

export default function Detail() {
    return (
        <div className='mainDetail'>
            <div className='backgroundContainer'>
                <h2 className='title'>Servicios</h2>
                <StaticImage
                        src="../images/detail.jpg"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="headerImage"
                    />
            </div>

            <div className='alineacion'>
                <div className='alineacionTitle'>
                    <h2>Alineación y Balanceo</h2>
                    <h3>Le damos a tu auto el balance que necesita para llevarte tan lejos como quieras llegar.</h3>
                    <button className='boton'><StaticImage
                        src="../images/whatsapp1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="buttonImage"
                    />Contacta y Cotiza!</button>
                </div>
                <StaticImage
                    src="../images/blog1.jpg"
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
                    <button className='boton'><StaticImage
                        src="../images/whatsapp1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="buttonImage"
                    />Contacta y Cotiza!</button>
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
                    <button className='boton'><StaticImage
                        src="../images/whatsapp1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="buttonImage"
                    />Contacta y Cotiza!</button>
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
                    <button className='boton'><StaticImage
                        src="../images/whatsapp1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        formats={['auto', 'webp', 'avif']}
                        className="buttonImage"
                    />Contacta y Cotiza!</button>
                </div>
                <StaticImage
                    src="../images/blog4.jpg"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="detailImage"
                />
            </div>
        </div>
    );
}
