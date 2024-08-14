import { useState } from 'react'
import { IoHeart } from 'react-icons/io5'

export const HomeHead = () => {
    const images = ['/img/img-1.jpg']

    const [img] = useState(images[0])

    return (
        <div>
            <div className="h-screen">
                <div
                    className="h-full bg-center bg-cover transition-all"
                    style={{ background: `url(${img})` }}
                >
                    <div className="relative w-full h-full flex flex-wrap items-end justify-center pb-16 md:pb-32">
                        <div className="text-center font-['Old+Standard+TT'] text-white">
                            <div className="text-2xl font-['Montserrat']">
                                SAVE THE DATE
                            </div>
                            <div className="pt-4 md:pt-8" />
                            <div className="text-4xl md:text-6xl flex">
                                Thùy Linh <span className="ml-1 md:ml-4" />
                                <IoHeart color="white" />
                                <span className="mr-1 md:mr-3" />
                                Đức Mạnh
                            </div>
                            <div className="pt-4 md:pt-8" />
                            <div className="text-3xl md:text-4xl px-8 py-4 border-2 border-white shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                                22.09.2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
