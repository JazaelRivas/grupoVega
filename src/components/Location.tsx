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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.364729223452!2d-101.66142236780874!3d21.133972834792953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbee234c40001%3A0x40c43c98429a5144!2sMichelin%20Hilario%20Medina!5e0!3m2!1ses-419!2smx!4v1689217808182!5m2!1ses-419!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <div className='locationLinks'>
                    <a href=""  className='locationLink'><StaticImage
                            src="../images/facebook.png"
                            alt="telefono fijo"
                            layout="fixed"
                            width={30}
                            height={30}
                            formats={['auto', 'webp', 'avif']}
                            imgStyle={{ objectFit: 'cover' }}
                        /><h2>
                        Grupo Vega Hilario Medina</h2>
                    </a>
                    <a href="" className='locationLink'><StaticImage
                        src="../images/instagram.png"
                        alt="telefono fijo"
                        layout="fixed"
                        width={30}
                        height={30}
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'cover' }}
                    />
                       <h2>grupo.vegahm </h2>
                    </a>
                    <button></button>
                </div>
            </div>
        </div>
    )

}