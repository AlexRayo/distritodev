import React from 'react'
import Image from 'next/image'
import Button from "../components/button"

import srcImgCover from '../public/img/cover.jpg'
import { contact } from '@/config/main'

function HomeCover() {
    return (
        <div className="bg-primary md:py-12" id='cover'>
            <div className="container py-4">
                <div className="blocks-half-desk md:h-96">
                    <div className='md:w-5/12'>
                        <h1 className='h1-format text-dark'>Diseño profesional para tu sitio web y marca empresarial</h1>
                        <p className='text-slate-900 mt-4'>Desarrollamos tus proyectos desde cero o renovamos su imagen; sitios web, logotipos, ilustraciones y diseño publicitario. Cada uno especialmente creado para captar la atención de clientes potenciales</p>
                        <div className="flex mt-4">
                            <Button
                                type="secondary"
                                href="#services"
                                text="Nuestros servicios"
                            />
                            <Button
                                type="primary"
                                href={contact.WHATSAPP_LINK}
                                text="Cotiza ahora!"
                                style="ml-4"
                            />
                        </div>
                    </div>
                    <div className="my-4 md:mt-0 md:w-5/12 overflow-hidden rounded relative group hover:scale-95 hover:rotate-1">
                        <span className="absolute w-100 p-5 text-center left-0 right-0 bottom-0 transition-all duration-300 hover:p-7 bg-gradient-to-tl from-slate-700 to-transparent">
                            <p className='text-2xl font-bold text-slate-100 uppercase tracking-widest'>Sitio web en construcción</p>
                        </span>
                        <Image
                            src={srcImgCover}
                            placeholder="blur"
                            alt={"Branding"}
                            width={1000}
                            height={700}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCover