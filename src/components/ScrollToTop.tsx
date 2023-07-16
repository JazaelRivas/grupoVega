import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button when the user has scrolled down a certain distance
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const isVisible = scrollY > 1;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <StaticImage
                src="../images/chevron.png"
                alt="boton whatsapp"
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                imgStyle={{ objectFit: 'fill' }}
                className="aboutButtonWhatsapp"
            />
        </button>
    );
};

export default ScrollToTopButton;
