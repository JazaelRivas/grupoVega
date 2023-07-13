import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.scss"

export default function Brands() {
    return (
        <div className="mainBrands">
            <h2 className="brandsTitle">Las Marcas que Nos Representan</h2>
            <div className="brandsContent">
                <StaticImage
                    src="../images/brands.png"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="brandsImage"
                />
                <StaticImage
                    src="../images/dunlop.png"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="dunlop"
                />
                <StaticImage
                    src="../images/tires.png"
                    alt="telefono fijo"
                    layout="constrained"
                    formats={['auto', 'webp', 'avif']}
                    className="tires"
                />
                <h3>Las marcas que ya conoces con la misma calidad y seguridad de siempre.</h3>
            </div>

        </div>
    )
}