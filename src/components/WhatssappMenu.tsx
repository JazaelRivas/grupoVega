import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import DropdownItem from './DropDownItem';
import DropDownItemInput from './DropDownItemInput';
import WhatsappInpunt from './WhatsappInput';
import '../styles/global.scss';

const WhatssappMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const preguntaDinamica = "Quisiera informes sobre sus Servicios";
  const preguntaDinamica1 = "Quisiera informes sobre los paquetes que tienen";
  const preguntaDinamica2 = "Quisiera informes sobre las marcas que tienen";
  const preguntaDinamica3 = "Quisiera informes generales";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowInitialMessage(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowMenu(false);
      setShowInitialMessage(true);
    }
  };

  const closeMenu = () => {
    setShowMenu(false)
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button className={`staticWhatsapp ${showMenu ? 'menuOpen' : ''}`} onClick={toggleMenu}>
        <StaticImage
          src="../images/whatsapp.png"
          alt="contacto whatsapp"
          layout="constrained"
          formats={['auto', 'webp', 'avif']}
          imgStyle={{ objectFit: 'cover' }}
        />
      </button>
      {showInitialMessage && (
        <div className="initialMessage" onClick={toggleMenu}>
          Hola! Necesitas Ayuda?👨‍🔧
        </div>
      )}
      {showMenu && (
        <div className="modalContainer" ref={modalRef}>
          <div>
            <h2>Menu</h2>
            <button className='headerCloseButton' onClick={closeMenu}><StaticImage
              loading='eager'
              src="../images/close.png"
              alt="telefono fijo"
              layout="constrained"
              formats={['auto', 'webp', 'avif']}
              imgStyle={{ objectFit: 'cover' }}
              className='modaClose'
            /></button>
          </div>
          <ul>
            <WhatsappInpunt pregunta={preguntaDinamica}/>
            <DropdownItem pregunta={preguntaDinamica} />
            <DropdownItem pregunta={preguntaDinamica1} />
            <DropdownItem pregunta={preguntaDinamica2} />
            <DropdownItem pregunta={preguntaDinamica3} />
          </ul>

        </div>
      )}
    </>
  );
};

export default WhatssappMenu;
