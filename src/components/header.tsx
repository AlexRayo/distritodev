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
        <nav className="custom-container flex justify-between py-8">
            <Logo/>
            <ul className="hidden md:flex">
                <li className="menu-item"><a href="#" className="">Inicio</a></li>
                <li className="menu-item"><a href="#" className="">Servicios</a></li>
                <li className="menu-item"><a href="#" className="">Quienes somos</a></li>
                <li className="menu-item"><a href="#" className="">Portfolio</a></li>
                <li className="menu-item"><a href="#" className="">Cotiza</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header