import React from 'react'
import Image from 'next/image'
import Button from "../components/button"

import srcImgRestaurant from '../public/img/santamaria.png'

function HomeCover() {
    return (
        <div className="bg-primary md:py-12">
            <div className="custom-container py-4">
                <div className="blocks-half-desk md:h-96">
                    <div className='md:w-5/12'>
                        <h1 className='h1-format text-dark'>Diseño profesional para tu sitio web y marca empresarial</h1>
                        <p className='text-slate-900 mt-4'>Desarrollamos tus proyectos desde cero o renovamos su imagen; sitios web, logotipos, ilustraciones y diseño publicitario. Cada uno especialmente creado para captar la atención de clientes potenciales</p>
                        <div className="flex mt-4">
                            <Button
                                type="secondary"
                                href="#"
                                text="Nuestros servicios"
                            />
                            <Button
                                type="primary"
                                href="#"
                                text="Cotiza ahora!"
                                style="ml-4"
                            />
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 h-48 md:w-5/12 md:h-96 overflow-hidden rounded">
                        <Image
                            src={srcImgRestaurant}
                            placeholder="blur"
                            alt={"Branding"}
                            width={1000}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCover