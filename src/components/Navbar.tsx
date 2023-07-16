import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "react-scroll";
import "../styles/global.scss"

interface NavbarProps {
    scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
    const handleScrollToSection = (sectionId: string) => {
        scrollToSection(sectionId);
    };
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
                    width={60}
                    height={60}
                    formats={["auto", "webp", "avif"]}
                    imgStyle={{ objectFit: "cover" }}
                />
            )}
            </a>
            <div className="linksList ">
                <Link
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont Inicio"
                    onClick={() => handleScrollToSection("/")}
                >
                    Inicio
                </Link>
                <Link
                    to="section-about"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-about")}
                >
                    Nosotros
                </Link>
                <Link
                    to="section-promos"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-promos")}
                >
                    Paquetes
                </Link>
                <Link
                    to="section-brands"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-brands")}
                >
                    Marcas
                </Link>
                <Link
                    to="section-services"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-services")}
                >
                    Servicios
                </Link>
                <Link
                    to="section-trending"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-trending")}
                >
                    Trending🔥
                </Link>
                <Link
                    to="section-trending"
                    spy={true}
                    smooth={true}
                    duration={250}
                    className="hubFont"
                    onClick={() => handleScrollToSection("section-trending")}
                >  <StaticImage
                        src="../images/location.png"
                        alt="Logo Grupo Vega Amarillo"
                        layout="constrained"
                        formats={["auto", "webp", "avif"]}
                        imgStyle={{ objectFit: "cover" }}
                        className="hubContact"
                    /></Link>
                <a href="">  <StaticImage
                    src="../images/whatsapp.png"
                    alt="Logo Grupo Vega Amarillo"
                    layout="constrained"
                    formats={["auto", "webp", "avif"]}
                    imgStyle={{ objectFit: "cover" }}
                    className="hubContact"
                /></a>
            </div>
        </div>
    )

}