import React from 'react';
import "./main.scss"
import { Header, Detail } from '../components';
import { StaticImage } from 'gatsby-plugin-image';

export default function Blog() {
  return (
    <div>

      <Detail />
      <a href="/" className="staticWhatsapp">
        <StaticImage
          src="../images/whatsapp.png"
          alt="contacto whatsapp"
          layout="constrained"
          formats={['auto', 'webp', 'avif']}
          imgStyle={{ objectFit: 'cover' }}
        />
      </a>
    </div>
  );
}
