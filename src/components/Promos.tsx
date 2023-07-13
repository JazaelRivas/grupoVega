import React, { useState, useEffect } from "react";
import Slider, { Settings } from "react-slick";
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

  const settings: Settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    appendDots: (dots: JSX.Element) => (
      <ul className="customDots">{dots}</ul>
    ),
    customPaging: () => (
      <div className="customDot"></div>
    ),
  };

  return (
    <div className="mainPromos">
      <h2 className="promosTitle">El cuidado total de tu auto<p className="promosSubtitle">Todo lo que necesitas en un mismo lugar.</p></h2>

      {showCarousel ? (
        <Slider className="sliderPromo" {...settings}>
          <div className="promoCard">
            <h3>Paquete 1</h3>
            <div className="cardContent">
              <p>Alineacion y Balanceo</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 2</h3>
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 3</h3>
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
              <p>Cambio de aceite y filtro.</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 4</h3>
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
              <p>Cambio de aceite y filtro.</p>
              <p>Limpieza de Inyectores de Aceleracion </p>
              <p>Bujias</p>
            </div>
          </div>
        </Slider>
      ) : (
        <div className="promoCards">
          <div className="promoCard">
            <h3>Paquete 1</h3>
            <StaticImage
              src="../images/puntero.png"
              alt="telefono fijo"
              layout="constrained"
              width={100}
              height={100}
              formats={["auto", "webp", "avif"]}
              imgStyle={{ objectFit: "cover" }}
              className="click"
            />
            <div className="cardContent">
              <p>Alineacion y Balanceo</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 2</h3>
            <StaticImage
              src="../images/puntero.png"
              alt="telefono fijo"
              layout="constrained"
              width={100}
              height={100}
              formats={["auto", "webp", "avif"]}
              imgStyle={{ objectFit: "cover" }}
              className="click"
            />
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 3</h3>
            <StaticImage
              src="../images/puntero.png"
              alt="telefono fijo"
              layout="constrained"
              width={100}
              height={100}
              formats={["auto", "webp", "avif"]}
              imgStyle={{ objectFit: "cover" }}
              className="click"
            />
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
              <p>Cambio de aceite y filtro.</p>
            </div>
          </div>
          <div className="promoCard">
            <h3>Paquete 4</h3>
            <StaticImage
              src="../images/puntero.png"
              alt="telefono fijo"
              layout="constrained"
              width={100}
              height={100}
              formats={["auto", "webp", "avif"]}
              imgStyle={{ objectFit: "cover" }}
              className="click"
            />
            <div className="cardContent">
              <p>Alineacion Balanceo</p>
              <p>Balanceo</p>
              <p>Rotacion</p>
              <p>Limpieza y Ajuste de Frenos</p>
              <p>Cambio de aceite y filtro.</p>
              <p>Limpieza de Inyectores de Aceleracion </p>
              <p>Bujias</p>
            </div>
          </div>
        </div>
      )}

      <button className="promosButton">
        <StaticImage
          src="../images/whatsapp1.png"
          alt="telefono fijo"
          layout="constrained"
          formats={["auto", "webp", "avif"]}
          imgStyle={{ objectFit: "cover" }}
          className='aboutButtonWhatsapp'
        />
        Contactanos y cotiza!
      </button>
    </div>
  );
}
