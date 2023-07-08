import React from "react"
import "./main.scss"
import { Header, Hub, About, Promos, Brands, Services , Lines , Trend , Inclusion ,  } from "../components";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";

export default function Index() {

  return (
    <div className="mainDivHome">
      <Header />
      <Element name="/" className="section">
        <Hub />
      </Element>
      <Element name="section-about" className="section">
        <About />
      </Element>
      <Element name="section-promos" className="section">
        <Promos />
      </Element>
      <Element name="section-brands" className="section">
        <Brands />
      </Element>
      <Element name="section-services" className="section">
        <Services />
      </Element>
      <Lines/>
      <Trend/>
      <Inclusion/>
      <a href="/" className="staticWhatsapp">
        <StaticImage
          src="../images/whatsapp.png"
          alt="contacto whatsapp"
          layout="fixed"
          width={50}
          height={50}
          formats={['auto', 'webp', 'avif']}
          imgStyle={{ objectFit: 'cover' }}
        />
      </a>
    </div>
  );
}
