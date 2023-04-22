import React from 'react'
import ServiceItem from "../components/serviceItem"
import Image from 'next/image'
import Button from "../components/button"

import webDev from '../public/img/services/web-dev.png'
import webRedesign from '../public/img/services/web-redesign.png'
import logoDesign from '../public/img/services/logo-design.png'
import logoRedesign from '../public/img/services/logo-redesign.png'
import socialNetwork from '../public/img/services/social-media-design.png'
import illustrations from '../public/img/services/illustration.png'
import brandDesign from '../public/img/services/brand-design.png'
import { contact } from '@/config/main'

export default function HomeAbout() {
    return (
        <div className="" id='services'>
            <div className="container mt-8 lg:mt-20 py-12">
                <div className='mx-auto md:w-6/12 md:text-center'>
                    <h2 className='h2-format text-dark'>Nuestros servicios</h2>
                    {/* <p className="text-dark mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!.
                    </p> */}
                </div>

                {/* WEB DEVELOPMENT */}
                <div className="md:border-b-1 md:pb-10 md:pt-8">
                    <h3 className="h3-format text-dark mt-4">
                        Desarrollo web
                    </h3>
                    <div className="blocks-half-desk">
                        <ServiceItem
                            srcImg={webDev}
                            altImg={"Creación de sitios web"}
                            title={"Creación de sitios web"}
                            description={"Desarrollamos tu primer sitio web diseñado a detalle para mostrar tus servicios o productos, de tal forma que puedas capturar la atención de tus usuarios/clientes."}
                        />
                        <ServiceItem
                            srcImg={webDev}
                            altImg={"Rediseño de sitios web"}
                            title={"Rediseño de sitios web"}
                            description={"Actualizamos tu sitio web con nuevas y mejores tendencias de diseño. Siempre enfocándonos en capturar la atención que tu negocio necesita para aumentar tus ventas."}
                        />
                    </div>
                </div>

                {/* LOGO DESIGN */}
                <div className="mt-8 md:border-b-1 md:pb-10">
                    <h3 className="h3-format text-dark mt-4">
                        Diseño de logo y branding
                    </h3>
                    <div className="blocks-half-desk">
                        <ServiceItem
                            srcImg={logoDesign}
                            altImg={"Creación de logotipo"}
                            title={"Creación de logotipo"}
                            description={"Creamos tu logotipo implementando estudio de mercado, para crear así un sello de marca original y profesional que represente a tu negocio o empresa."}
                        />
                        <ServiceItem
                            srcImg={logoRedesign}
                            altImg={"Rediseño de logotipo"}
                            title={"Rediseño de logotipo"}
                            description={"Renovamos tu logotipo basado en el estudio de tu negocio/empresa. Creando un diseño moderno y fresco para brindar una mejor impresión."}
                        />
                    </div>
                </div>

                {/* GRAPHIC DESIGN */}
                <div className="mt-8 md:border-b-1 md:pb-10">
                    <h3 className="h3-format text-dark mt-4">
                        Diseño gráfico y publicitario
                    </h3>
                    <div className="blocks-half-desk">
                        <ServiceItem
                            srcImg={socialNetwork}
                            altImg={"Redes sociales"}
                            title={"Redes sociales"}
                            description={"Diseñamos flyers y banners publicitarios pensados para capturar de forma efectiva la atención de usuarios y clientes potenciales."}
                        />
                        <ServiceItem
                            srcImg={illustrations}
                            altImg={"Ilustraciones"}
                            title={"Ilustraciones"}
                            description={"Creamos ilustraciones personalizadas para impresión o medios digitales."}
                        />
                    </div>
                </div>

                {/* BRANDING */}
                <div className="blocks-half-desk py-8">
                    <div className="md:w-5/12">
                        <h2 className="h2-format">Branding</h2>
                        <h4 className="h4-format mt-4">Creación virtual de tu empresa</h4>
                        <p className="mt-2">Nos encargamos de todo el diseño de tu marca empresarial y te brindamos tu respectivo manual que te guía paso a paso para la implementación en medios digitales e impresos; este puede contener: papelerías corporativas, página web, publicidad offline/online o cualquier aplicación que desees implementar en tu negocio.</p>

                        <div className="flex mt-4 justify-end md:justify-start">
                            <Button
                                type="primary"
                                href={contact.WHATSAPP_LINK}
                                text="Cotiza"
                            />
                        </div>

                    </div>
                    <div className="md:w-6/12 overflow-hidden rounded pt-8 md:pt-0">
                        <Image
                            src={brandDesign}
                            placeholder="blur"
                            alt={"Branding"}
                            width={1000}
                            height={2000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}