import { useState } from 'react'
import { IoHeart } from 'react-icons/io5'
import { Section } from 'component/section/Section.tsx'
import { motion } from 'framer-motion'

export default function HomeHead() {
    const images = ['/img/manhlinh-banner-01.jpg', '/img/manhlinh-banner-02.JPG']

    const [fetched, setFetched] = useState(false)
    const [desktopFetch, setDesktopFetched] = useState(false)

    const desktopFullSizeImg = '/img/manhlinh-banner-02.JPG'
    const desktopPreviewImg = '/img/manhlinh-banner-2-min.jpg'
    const fullSizeImg = '/img/head-mobile.png'

    const source = {
        date: '22.09.2024',
        location: 'W.Jardin - 307 Nguyễn Văn Linh',
    }

    const [img] = useState(images[0])

    const head = (
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
                    {source.date}
                </div>
                <div className="mt-2 font-viao font-semibold font-['Montserrat'] text-xl md:text-4xl px-8 py-2 md:py-4 focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                    {source.location}
                </div>
            </div>
        </div>
    )

    return (
        <Section>
            <div className="h-screen">
                <div
                    className="h-full transition-all block md:hidden bg-cover"
                    style={{
                        backgroundImage: `url(${fetched ? fullSizeImg : img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: fetched ? 'center 0' : 'center 20%',
                    }}
                >
                    <img
                        src={fullSizeImg}
                        alt="Background"
                        onLoad={() => {
                            setFetched(true)
                        }}
                        style={{ display: 'none' }}
                    />
                    {fetched ? null : <div className="relative w-full h-full flex flex-wrap items-start md:items-end justify-center pt-16 md:p-0">
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    ease: 'linear',
                                    duration: 3000,
                                }}
                            >
                                {head}
                            </motion.div>
                        </>
                    </div>}
                </div>
                <div
                    className="h-full transition-all hidden md:block"
                    style={{
                        backgroundImage: `url(${desktopFetch ? desktopFullSizeImg : desktopPreviewImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                    }}
                >
                    <img
                        loading="eager"
                        src={desktopFullSizeImg}
                        alt="Background"
                        onLoad={() => {
                            console.log('FETCHED')
                            setDesktopFetched(true)
                        }}
                        style={{ display: 'none' }} // Hide the image element
                    />
                    <div className="relative w-full h-full flex flex-wrap items-end justify-center pb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                ease: 'linear',
                                duration: 3000,
                            }}
                        >
                            <div className="text-center font-viao text-white txt-shadow">
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
                                    <div className="font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-theme-bg shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                                        {source.date}
                                    </div>
                                    <div className="font-viao mt-2 font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                                        {source.location}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
