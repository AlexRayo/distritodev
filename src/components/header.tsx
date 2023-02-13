import React from 'react'
import Head from 'next/head'

import Logo from "../components/svg/logo-distritodev.svg"

function Header() {
    return (
        <>
            <Head>
                <title>DistritoDev</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className=" bg-primary-color">
                <nav className="custom-container flex justify-between py-8 relative">
                    <Logo />

                    <div className="relative inline-block text-left dropdown text-3xl">
                        <button className='md:hidden' type="button">☰</button>
                        <div className="opacity-0 opacity-100 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 md:visible">
                            <div className="absolute md:relative right-0 w-56 md:w-auto mt-2 md:mt-0 origin-top-right bg-secondary-color md:bg-transparent rounded-md" role="menu">
                                <div className="px-4 py-3">
                                    <ul className="menu-primary">
                                        <li><a href="#">Inicio</a></li>
                                        <li><a href="#">Servicios</a></li>
                                        <li><a href="#">Quienes somos</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Cotiza</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                </nav>
            </header>
        </>
    )
}

export default Header