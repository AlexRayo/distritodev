import React from 'react'
import Image from 'next/image'
import srcImgRestaurant from '../public/img/santamaria.png'

function HomeAbout() {
    return (
        <div className=" bg-primary-color-light py-20">
            <div className="custom-container">
                <div className="blocks-half-desk">
                    <div className="md:w-5/12">
                        <h2 className="h4-format">Distrito dev</h2>
                        <h3 className="h2-format">Quienes somos</h3>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto. Dolor sit amet consectetur adipisicing elit. Velit maiores consectetur quos ab autem hic earum cupiditate architecto!</p>

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