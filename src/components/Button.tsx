import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
interface Props {
    pregunta: string;
}

const WhatsappButton: React.FC<Props> = ({ pregunta }) => {
    const enviarPregunta = () => {
        const preguntaCodificada = encodeURIComponent(pregunta);
        const enlace = `https://api.whatsapp.com/send?phone=5214792217345&text=${preguntaCodificada}`;
        window.open(enlace, "_blank");
    };

    return (
        <button onClick={enviarPregunta} className='aboutButton'>
            <StaticImage
                src="../images/whatsapp1.png"
                alt="boton whatsapp"
                layout="constrained"
                formats={['auto', 'webp', 'avif']}
                imgStyle={{ objectFit: 'fill' }}
                className="aboutButtonWhatsapp"
            />
            Contactanos y cotiza!
        </button>
    );
};

export default WhatsappButton;
