import React from 'react'
import Image from 'next/image'
import srcImgRestaurant from '../public/img/santamaria.png'

function HomeAbout() {
    return (
        <div className=" bg-primary-color-light py-20">
            <div className="custom-container">
                <div className="blocks-half-desk">
                    <div className="md:w-5/12">
                        <h2 className="h2-format">Quienes somos</h2>
                        <p className="mt-2">Somos el mejor equipo de trabajo conformado por expertos en distintas áreas, enfocados en brindar soluciones a empresas que requieren dar un salto profesional</p>

                    </div>
                    <div className="mt-4 md:w-6/12 h-96 overflow-hidden rounded">
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

export default HomeAbout