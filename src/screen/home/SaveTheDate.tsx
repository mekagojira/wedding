import Calendar from 'react-calendar'
import { Section } from 'component/section/Section.tsx'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Divider } from 'component/section/Divider.tsx'

export const SaveTheDate = () => {
    const [guest, setGuest] = useState<string>('')

    useEffect(() => {
        const search = new URLSearchParams(window.location.search)
        setGuest(
            decodeURIComponent(search.get('guest') || search.get('g') || ''),
        )
    }, [])

    return (
        <Section>
            <div className="flex flex-col items-center pt-4">
                <div className="text-center font-old-standard md:text-2xl md:w-1/2`1">
                    <div className="text-xl font-thin">
                        Trân trọng kính mời {guest || 'bạn'}
                    </div>
                    <div className="text-xl font-thin">
                        Đến dự buổi tiệc chung vui của chúng tôi tại
                    </div>
                    <motion.div
                        initial={{ x: 200, y: 0 }}
                        whileInView={{ x: 0, y: 0 }}
                        animate={{ x: 200, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            ease: 'linear',
                            duration: 2000,
                        }}
                    >
                        <div className=" font-lovers text-4xl md:text-8xl my-4 md:my-8 text-theme-main">
                            W.Jardin
                        </div>
                        <div className="text-md">307 Nguyễn Văn Linh</div>
                        <div className="text-md">
                            Dư Hàng Kênh, Lê Chân, Hải Phòng
                        </div>
                        <div className="pt-4" />
                        <div className="flex flex-col items-center">
                            <div className="border-t-2 border-b-2 border-theme-main py-2 w-fit px-8">
                                <div className="text-md font-thin uppercase">
                                    vào lúc 11:00 - Chủ Nhật
                                </div>
                                <div className="text-3xl md:text-6xl font-bold">
                                    22 . 09 . 2024
                                </div>
                            </div>
                        </div>
                        {/*<div className="pt-8" />*/}
                        {/*<div className="text-xl font-thin">*/}
                        {/*    Sự hiện diện của quý khách là niềm vinh hạnh cho gia*/}
                        {/*    đình chúng tôi.*/}
                        {/*</div>*/}
                    </motion.div>
                </div>

                <div className="pt-4 md:pt-16" />
                <div className="container mx-auto px-4 md:px-0">
                    <motion.div
                        initial={{ x: -200, y: 0 }}
                        whileInView={{ x: 0, y: 0 }}
                        animate={{ x: -200, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            ease: 'linear',
                            duration: 2000,
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <div className="border-4 border-theme-main md:w-96">
                                <div className="text-xl font-old-standard uppercase font-black text-center p-2 bg-theme-main text-theme-bg">
                                    September 2024
                                </div>
                                <div className="flex justify-center">
                                    <div className="w-full border border-theme-main" />
                                </div>
                                <div className="pt-4" />
                                <div className="flex flex-col items-center justify-center px-2">
                                    <div className="w-full">
                                        <Calendar
                                            activeStartDate={new Date()}
                                            showNeighboringMonth={false}
                                            value={new Date('2024-09-22')}
                                            showNavigation={false}
                                            locale={'vi-vn'}
                                            tileClassName="p-2 text-md font-['Montserrat']"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <div className="font-viao text-center text-xl font-bold italic">
                                Sự hiện diện của Quý khách là niềm vinh hạnh cho
                                Gia đình chúng tôi !
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="py-8">
                    <Divider r />
                </div>
            </div>
        </Section>
    )
}
