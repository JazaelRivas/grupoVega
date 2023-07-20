import React from 'react';
import "../styles/global.scss"
import { StaticImage } from 'gatsby-plugin-image';

export default function Location() {

    return (
        <div className='mainLocation'>
            <div className='locationText'>
                <h2 className='locationTitle'>Visitanos</h2>
            </div>

            <div className='locationContent'>
                <div className='locationMap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058.17826497081!2d-101.65923725010438!3d21.137836003682484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbee234ba3941%3A0xa4dc216903d338ef!2sGrupo%20Vega%20Hilario%20Medina!5e0!3m2!1ses-419!2smx!4v1689823156707!5m2!1ses-419!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>


                <div className='locationLinks'>
                    <h3>Siguenos en nuestras redes y no te pierdas de ninguna promocion</h3>
                    <a href="" className='locationLink'><StaticImage
                        src="../images/facebook1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        className='locationLinksImage'
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'cover' }}
                    />
                    <h2>Grupo Vega Hilario Medina</h2>
                    </a>
                    <a href="" className='locationLink'><StaticImage
                        src="../images/instagram1.png"
                        alt="telefono fijo"
                        layout="constrained"
                        className='locationLinksImage'
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'cover' }}
                    />
                        <h2>grupo.vegahm</h2>
                    </a>
                    <button></button>
                </div>
            </div>
        </div>
    )

}