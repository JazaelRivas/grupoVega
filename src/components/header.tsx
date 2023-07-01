import React from "react"
import "../styles/global.scss"
import { StaticImage } from "gatsby-plugin-image"
import SandwichMenu from "./SandwichMenu"

export default function Header() {
    return (
        <header className="mainHeader">
            <nav className="mainNav">
                <div className="headerContact">
                    <div className="headerNumber">
                        <StaticImage
                            src="../images/phone.png"
                            alt="telefono fijo"
                            layout="fixed"
                            width={20}
                            height={20}
                            formats={['auto', 'webp', 'avif']}
                            imgStyle={{ objectFit: 'cover' }}
                        />
                        <p className="headerFont bold">(477) 772 40 61</p>
                    </div>

                    <div className="headerSchedule">
                        <p className="headerFont bold">Horario: <span style={{ fontWeight: 'normal' }}>Lu-Vi (9-6pm) Sa (9pm-2pm)</span></p>
                    </div>
                </div>
                <div className="headerLinks">
                    <a href=""><StaticImage
                        src="../images/facebook.png"
                        alt="telefono fijo"
                        layout="fixed"
                        width={30}
                        height={30}
                        formats={['auto', 'webp', 'avif']}
                        imgStyle={{ objectFit: 'cover' }}
                    /></a>
                    <a href="">
                        <StaticImage
                            src="../images/instagram.png"
                            alt="telefono fijo"
                            layout="fixed"
                            width={30}
                            height={30}
                            formats={['auto', 'webp', 'avif']}
                            imgStyle={{ objectFit: 'cover' }}
                        />
                    </a>
                </div>

                <div className="headerMenu">
                    <SandwichMenu />
                </div>

                <div className="headerLogo">
                    <a href="">
                        <StaticImage
                            src="../images/gvAzul.png"
                            alt="telefono fijo"
                            layout="fixed"
                            width={40}
                            height={40}
                            formats={['auto', 'webp', 'avif']}
                            imgStyle={{ objectFit: 'cover' }}
                        />
                    </a>
                </div>
            </nav>
        </header>
    )
}

