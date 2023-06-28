import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

export default function Promos() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowCarousel(window.innerWidth <= 820);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="mainPromos">
      <h2 className="promosTitle">El cuidado total de tu auto</h2>

      {showCarousel ? (
        <Slider {...settings}>
          <div className="promoCard">
            <h3>Paquete 1</h3>
            <p>Alineacion <br />y <br />Balanceo</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 2</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 3</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
            <p>Cambio de aceite y filtro.</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 4</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
            <p>Cambio de aceite y filtro.</p>
            <p>Limpieza de Inyectores <br />de Aceleracion </p>
            <p>Bujias</p>
          </div>
        </Slider>
      ) : (
        <div className="promoCards">
          <div className="promoCard">
            <h3>Paquete 1</h3>
            <p>Alineacion <br />y <br />Balanceo</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 2</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 3</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
            <p>Cambio de aceite y filtro.</p>
          </div>
          <div className="promoCard">
            <h3>Paquete 4</h3>
            <p>Alineacion Balanceo</p>
            <p>Balanceo</p>
            <p>Rotacion</p>
            <p>Limpieza y Ajuste de Frenos</p>
            <p>Cambio de aceite y filtro.</p>
            <p>Limpieza de Inyectores <br />de Aceleracion </p>
            <p>Bujias</p>
          </div>
        </div>
      )}

      <button className="promosButton">
        <StaticImage
          src="../images/phone.png"
          alt="telefono fijo"
          layout="fixed"
          width={20}
          height={20}
          formats={["auto", "webp", "avif"]}
          imgStyle={{ objectFit: "cover" }}
        />
        Contactanos y cotiza tu servicio!
      </button>
    </div>
  );
}
