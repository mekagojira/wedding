import { useState } from 'react'
import { IoHeart } from 'react-icons/io5'
import ScrollAnimation from 'react-animate-on-scroll'

export const HomeHead = () => {
    const images = ['/img/manhlinh-banner-01.JPG']

    const [img] = useState(images[0])

    return (
        <div>
            <div className="h-screen">
                <div
                    className="h-full transition-all"
                    style={{
                        background: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 20%',
                    }}
                >
                    <ScrollAnimation
                        animateIn="bounceInUp"
                        initiallyVisible
                        animateOnce
                        delay={450}
                    >
                        <div className="relative w-full h-full flex flex-wrap items-start justify-center pt-16 md:pt-32">
                            <div className="text-center font-viao text-white">
                                <div className="text-2xl font-bold font-['Montserrat']">
                                    SAVE THE DATE
                                </div>
                                <div className="pt-4 md:pt-8" />
                                <div className="text-4xl md:text-6xl flex">
                                    Đức Mạnh <span className="ml-1 md:ml-4" />
                                    <IoHeart color="white" />
                                    <span className="mr-1 md:mr-3" />
                                    Thùy Linh
                                </div>
                                <div className="pt-4 md:pt-8" />
                                <div className=" px-4 md:px-0">
                                    <div className="font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-white shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                                        22.09.2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
