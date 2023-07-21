import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "react-scroll";
import WhatsappButton from './WhatsappButton';
import "../styles/global.scss"

interface NavbarProps {
    scrollToSection: (sectionId: string) => void;
}

export default function SandwichMenu({ scrollToSection }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const preguntaDinamica = "Hola, quisiera informes porfavor!";

    const handleScrollToSection = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handlemenuClose = () => {
        setIsOpen(false)
    }

    return (
        <div><button onClick={handleMenuClick}>   <StaticImage
            src="../images/menu.png"
            alt="telefono fijo"
            layout="fixed"
            width={20}
            height={20}
            formats={['auto', 'webp', 'avif']}
            imgStyle={{ objectFit: 'cover' }}

        /></button>


            {isOpen && (
                <div
                    className='headerMenuModal'
                    ref={menuRef}
                >
                    <div className='headerMenuContent' >
                        <div className='headerMenuList'>
                            <button className='headerCloseButton' onClick={handlemenuClose}><StaticImage
                                loading='eager'
                                src="../images/close.png"
                                alt="telefono fijo"
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                imgStyle={{ objectFit: 'cover' }}
                                className='modaClose'
                            /></button>

                            <a href="/" className='headerLogoLink'><StaticImage
                                src="../images/gvAmarillo.png"
                                alt="telefono fijo"
                                loading='eager'
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                imgStyle={{ objectFit: 'cover' }}
                                className='headerMenuLogo'
                            /></a>
                        </div>

                        <div className='modalLinks'>
                            <Link
                                to="/"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("/")}
                            >
                                <StaticImage
                                    src="../images/home.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Inicio
                            </Link>
                            <Link
                                to="section-about"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-about")}
                            >
                                <StaticImage
                                    src="../images/group.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Nosotros
                            </Link>
                            <Link
                                to="section-promos"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-promos")}
                            >
                                <StaticImage
                                    src="../images/blueprint.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Paquetes
                            </Link>
                            <Link
                                to="section-brands"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-brands")}
                            >  <StaticImage
                                    src="../images/tag.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Marcas
                            </Link>
                            <Link
                                to="section-services"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-services")}
                            >
                                <StaticImage
                                    src="../images/service.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Servicios
                            </Link>
                            <Link
                                to="section-trend"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-trend")}
                            >
                                <StaticImage
                                    src="../images/trending.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Trending
                            </Link>
                            <Link
                                to="section-location"
                                spy={true}
                                smooth={true}
                                duration={250}
                                className="modaLink"
                                onClick={() => handleScrollToSection("section-location")}
                            >
                                <StaticImage
                                    src="../images/location.png"
                                    alt="telefono fijo"
                                    layout="constrained"
                                    formats={['auto', 'webp', 'avif']}
                                    className="link"
                                />
                                Ubicanos
                            </Link>
                            <WhatsappButton pregunta={preguntaDinamica} className='modalMenuButton'/>
                            <p className='modalFooter'>GrupoVega <br />2023™</p>
                           
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


