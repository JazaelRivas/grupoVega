import React from "react"
import "./main.scss"
import { Header, Hub , About , Promos } from "../components";
import { StaticImage } from "gatsby-plugin-image";

export default function Index() {
  return (
    <div className="mainDivHome">
      <Header />
      <Hub />
      <About />
      <Promos/>
      <a href="/" className="staticWhatsapp"> <StaticImage
        src="../images/whatsapp.png"
        alt="contacto whatsapp"
        layout="fixed"
        width={50}
        height={50}
        formats={['auto', 'webp', 'avif']}
        imgStyle={{ objectFit: 'cover' }}
      /></a>
    </div>
  )
}