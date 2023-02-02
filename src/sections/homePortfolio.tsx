import React from 'react'
import Image from 'next/image'
import srcImgRestaurant from '../public/img/santamaria.png'

export default function HomePortfolio() {
    return (
        <div className="bg-primary-color-light-2 py-20">
            <div className="custom-container">
                <div className="md:w-5/12">
                    <h2 className="h2-format">Portafolio</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto.</p>

                </div>
                <div className="mt-4 w-full h-96 overflow-hidden rounded">
                    <Image
                        src={srcImgRestaurant}
                        placeholder="blur"
                        alt={"Branding"}
                        width={2000}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}