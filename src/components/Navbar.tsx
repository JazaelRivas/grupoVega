import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.scss"

export default function Navbar() {
    const [navbarBackground, setNavbarBackground] = useState(false);
    const [imageSrc, setImageSrc] = useState("../images/gvAmarillo.png");

    const changeBackground = () => {
        if (window.scrollY >= window.innerHeight - 200) {
            setNavbarBackground(true);
        } else {
            setNavbarBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);

    const navbarClass = navbarBackground ? "hubLinks scrolled" : "hubLinks";
    return (
        <div className={navbarClass}>
            <a href="/" >{navbarBackground ? (
                <StaticImage
                    src="../images/gvAzul.png"
                    alt="telefono fijo"
                    loading="lazy"
                    formats={['auto', 'webp', 'avif']}
                    imgStyle={{ objectFit: 'fill' }}
                    className="NavbarPhotoBlue"
                />
            ) : (
                <StaticImage
                    src="../images/gvAmarillo.png"
                    alt="Logo Grupo Vega Amarillo"
                    layout="fixed"
                    width={100}
                    height={100}
                    formats={["auto", "webp", "avif"]}
                    imgStyle={{ objectFit: "cover" }}
                />
            )}
            </a>
            <div className="linksList ">
                <a href=""><ul className="hubFont Inicio">Inicio</ul></a>
                <a href=""><ul className="hubFont">Sobre Nosotros</ul></a>
                <a href=""><ul className="hubFont">Paquetes</ul></a>
                <a href=""><ul className="hubFont">Marcas</ul></a>
                <a href=""><ul className="hubFont">Servicios</ul></a>
                <a href=""><ul className="hubFont">Ubicanos</ul></a>
                <a href="">  <StaticImage
                    src="../images/location.png"
                    alt="Logo Grupo Vega Amarillo"
                    layout="fixed"
                    width={40}
                    height={40}
                    formats={["auto", "webp", "avif"]}
                    imgStyle={{ objectFit: "cover" }}
                    className="hubContact"
                /></a>
                <a href="">  <StaticImage
                    src="../images/whatsapp.png"
                    alt="Logo Grupo Vega Amarillo"
                    layout="fixed"
                    width={40}
                    height={40}
                    formats={["auto", "webp", "avif"]}
                    imgStyle={{ objectFit: "cover" }}
                    className="hubContact"
                /></a>
            </div>
        </div>
    )

}