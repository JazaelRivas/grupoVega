import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

import WhatsappButton from './Button';
import "../styles/global.scss"

interface NavbarProps {
    scrollToSection: (sectionId: string) => void;
}

export default function DetailMenu({ scrollToSection }: NavbarProps) {
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

                            <Link to="/" className='headerLogoLink'><StaticImage
                                src="../images/gvAmarillo.png"
                                alt="telefono fijo"
                                loading='eager'
                                layout="constrained"
                                formats={['auto', 'webp', 'avif']}
                                imgStyle={{ objectFit: 'cover' }}
                                className='headerMenuLogo'
                            /></Link>
                        </div>

                        <div className='modalLinks'>
                            <Link
                                to="/"
                                className="modaLink"
                                onClick={() => handleScrollToSection("/index")}
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
                            <WhatsappButton pregunta={preguntaDinamica} />
                            <p className='modalFooter'>GrupoVega <br />2023™</p>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


