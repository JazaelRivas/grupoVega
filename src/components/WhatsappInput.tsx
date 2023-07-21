import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.scss';

interface Props {
  pregunta: string;
  className?: string; // Accepts an optional className prop
}

const WhatsappInput: React.FC<Props> = ({ pregunta, className }) => {
  const [userQuestion, setUserQuestion] = useState('');

  const enviarPregunta = () => {
    const preguntaCodificada = encodeURIComponent(userQuestion || pregunta);
    const enlace = `https://api.whatsapp.com/send?phone=5214792217345&text=${preguntaCodificada}`;
    window.open(enlace, "_blank");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserQuestion(event.target.value);
  };

  const isInputFilled = userQuestion.trim().length > 0;
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        <input
          type="text"
          value={userQuestion}
          onChange={handleInputChange}
          placeholder="Ingresa tu pregunta"
          className={isInputFilled ? 'inputFilled' : ''}
        />
        <button onClick={enviarPregunta} className={`${className}`}>
          <StaticImage
            src="../images/send.png"
            alt="boton whatsapp"
            layout="constrained"
            formats={['auto', 'webp', 'avif']}
            imgStyle={{ objectFit: 'fill' }}
            className={`aboutButtonWhatsapp ${isInputFilled ? 'active' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default WhatsappInput;
