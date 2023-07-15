import React from 'react';
import { Header, Detail } from '../components';
import { StaticImage } from 'gatsby-plugin-image';
import "./main.scss"
export default function Blog() {
  return (
    <div>
      <Header />
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
