import React from 'react'
import Image from 'next/image'
import srcImgRestaurant from '../public/img/santamaria.png'
import srcImgWeb1 from '../public/img/portfolio/web1.png'
import srcImgLogo1 from '../public/img/portfolio/logo1.png'
import srcImgLogo2 from '../public/img/portfolio/logo2.png'
import srcImgLogo3 from '../public/img/portfolio/logo3.png'
import srcImgLogo4 from '../public/img/portfolio/logo4.png'

export default function HomePortfolio() {
    return (
        <div className="bg-primary-color-light-2 py-20">
            <div className="container">
                <div className="md:w-5/12">
                    <h2 className="h2-format mb-4">Portafolio</h2>

                </div>
                <div className="">

                    <div className="md:flex">
                        <div className="md:w-6/12 grid grid-cols-2 gap-2 md:gap-4">
                            <div className="relative group container-portfolio-img px-6 bg-white">
                                <span className="tooltip"><p>Logo para NearDojo</p></span>
                                <Image
                                    src={srcImgLogo1}
                                    placeholder="blur"
                                    alt={"Near Dojo logo"}
                                    width={200}
                                    height={50}
                                />
                            </div>
                            <div className="relative group container-portfolio-img px-12 bg-[#F05555]">
                                <span className="tooltip"><p>Logo para <a href="https://rebajatucompra.com/">RebajaTuCompra</a></p></span>
                                <Image
                                    src={srcImgLogo2}
                                    placeholder="blur"
                                    alt={"Rebaja tu compra logo"}
                                    width={120}
                                    height={50}
                                />
                            </div>
                            <div className="relative group container-portfolio-img px-6 bg-[#4A2DE5]">
                                <span className="tooltip"><p>Logo para Valorem</p></span>
                                <Image
                                    src={srcImgLogo3}
                                    placeholder="blur"
                                    alt={"Valorem logo"}
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div className="relative group container-portfolio-img px-12 bg-white">
                                <span className="tooltip"><p>Logo para BoncaiBuils</p></span>
                                <Image
                                    src={srcImgLogo4}
                                    placeholder="blur"
                                    alt={"Boncai Builds logo"}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>

                        <div className="md:w-6/12">
                            <div className="relative group h-96 overflow-hidden mt-2 md:mt-0 md:pl-4 md:h-[528px]">
                                <span className="tooltip left-2 md:left-6"><p>Desarrollo web para <a href="https://rebajatucompra.com/">RebajaTuCompra</a></p></span>
                                <Image
                                    src={srcImgWeb1}
                                    placeholder="blur"
                                    alt={"Web design Rebaja tu compra"}
                                    width={2000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative group mt-2 md:mt-4 w-full h-96 overflow-hidden">
                        <span className="tooltip left-2"><p>Logo para <a href="https://santamariarestaurante.es/">Restaurante santamaría</a></p></span>
                        <Image
                            src={srcImgRestaurant}
                            placeholder="blur"
                            alt={"Web design restaurant"}
                            width={2000}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}