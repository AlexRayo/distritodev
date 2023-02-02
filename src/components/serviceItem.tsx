import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import Button from "../components/button"

const ServiceItem = ({ srcImg, altImg, title, description, link }: any) => {

    const { ref: textRef, inView: inViewText } = useInView({
        threshold: 0.5,
    });

    return (
        <div ref={textRef} className={`block-half-desk group ${inViewText ? "opacity: 1" : "opacity: 0"}`}>
            <div className="relative grid grid-cols-1 overflow-hidden rounded">
                <Image
                    src={srcImg}
                    placeholder="blur"
                    alt={altImg}
                    width={200}
                    height={200}
                />
            </div>
            <h4 className="h4-format text-dark mt-4">{title}</h4>
            <p className="text-dark mt-2">{description}</p>
            <div className="flex justify-end md:justify-start mt-4">
                <Button
                    type="primary"
                    href="#"
                    text="Cotiza"
                />
            </div>
        </div>
    )
}

export default ServiceItem