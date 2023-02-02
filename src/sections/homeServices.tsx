import React from 'react'
import ServiceItem from "../components/serviceItem"
import Image from 'next/image'
import Button from "../components/button"

import webDev from '../public/img/web-dev.png'
import webRedesign from '../public/img/web-redesign.png'
import logoDesign from '../public/img/logo-design.png'
import logoRedesign from '../public/img/logo-redesign.png'
import socialNetwork from '../public/img/social-media-design.png'
import illustrations from '../public/img/illustration.png'
import brandDesign from '../public/img/brand-design.png'

export default function HomeAbout() {
    return (
        <div className="">
            <div className="custom-container mt-8 lg:mt-20 py-12">
                <div className='mx-auto md:w-6/12 md:text-center'>
                    <h2 className='h2-format text-dark'>Nuestros servicios</h2>
                    <p className="text-dark mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!.
                    </p>
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
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
                        />
                        <ServiceItem
                            srcImg={webDev}
                            altImg={"Rediseño de sitios web"}
                            title={"Rediseño de sitios web"}
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
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
                            altImg={"Creación de sitios web"}
                            title={"Creación de sitios web"}
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
                        />
                        <ServiceItem
                            srcImg={logoRedesign}
                            altImg={"Rediseño de sitios web"}
                            title={"Rediseño de sitios web"}
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
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
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
                        />
                        <ServiceItem
                            srcImg={illustrations}
                            altImg={"Ilustraciones"}
                            title={"Ilustraciones"}
                            description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!."}
                        />
                    </div>
                </div>

                {/* BRANDING */}
                <div className="blocks-half-desk py-8">
                    <div className="md:w-5/12">
                        <h2 className="h2-format">Branding</h2>
                        <h4 className="h4-format mt-4">Creación virtual de tu negocio</h4>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto. Dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!</p>

                        <div className="flex mt-4 justify-end md:justify-start">
                            <Button
                                type="primary"
                                href="#"
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