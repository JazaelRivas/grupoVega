import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/global.scss"

const SandwichMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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

   const handlemenuClose = () =>{
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
                    <div
                        className='headerMenuContent' >
                        <div className='headerMenuList'>
                            <button onClick={handlemenuClose}>  <StaticImage
                                loading='eager'    
                                src="../images/close.png"
                                alt="telefono fijo"
                                layout="fixed"
                                width={100}
                                height={100}
                                formats={['auto', 'webp', 'avif']}
                                imgStyle={{ objectFit: 'cover' }}
                            /></button>
                         
                            <a href="/"><StaticImage
                                src="../images/gvAmarillo.png"
                                alt="telefono fijo"
                                loading='eager'
                                layout="fixed"
                                width={100}
                                height={100}
                                formats={['auto', 'webp', 'avif']}
                                imgStyle={{ objectFit: 'cover' }}
                            /></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SandwichMenu;
