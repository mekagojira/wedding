import { useState } from 'react'
import { IoHeart } from 'react-icons/io5'
import { Section } from 'component/section/Section.tsx'

export const HomeHead = ({ setInit }: { setInit: () => void }) => {
    const images = [
        '/img/manhlinh-banner-01.JPG',
        '/img/manhlinh-banner-02.JPG',
    ]

    const [img] = useState(images[0])

    return (
        <Section>
            <div className="h-screen">
                <div
                    className="h-full transition-all block md:hidden"
                    style={{
                        background: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 20%',
                    }}
                >
                    <img
                        src={img}
                        alt="Background"
                        onLoad={() => setInit()}
                        style={{ display: 'none' }} // Hide the image element
                    />
                    <div className="relative w-full h-full flex flex-wrap items-start md:items-end justify-center pt-16 md:p-0">
                        <div className="text-center font-viao text-white md:text-theme-main">
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
                </div>
                <div
                    className="h-full transition-all hidden md:block"
                    style={{
                        background: `url(${images[1]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                    }}
                >
                    <div className="relative w-full h-full flex flex-wrap items-end justify-center pb-20">
                        <div className="text-center font-viao text-theme-bg">
                            <div className="text-2xl font-bold font-['Montserrat']">
                                SAVE THE DATE
                            </div>
                            <div className="pt-4 md:pt-8" />
                            <div className="text-4xl md:text-6xl flex">
                                Đức Mạnh <span className="ml-1 md:ml-4" />
                                <IoHeart color="#fff9f0" />
                                <span className="mr-1 md:mr-3" />
                                Thùy Linh
                            </div>
                            <div className="pt-4 md:pt-8" />
                            <div className=" px-4 md:px-0">
                                <div className="font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-theme-bg shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                                    22.09.2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
