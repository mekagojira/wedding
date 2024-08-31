import { Section } from 'component/section/Section.tsx'
import { HiHeart } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const WeGettingMarried = () => {
    return (
        <>
            <Section>
                <div className="flex flex-col items-center pt-8 min-h-screen">
                    <div className="text-center text-theme-main font-viao text-3xl font-bold flex">
                        <div className="-rotate-45">
                            <HiHeart size={24} />
                        </div>
                        <span className="">We are getting married</span>
                        <div className="rotate-45">
                            <HiHeart size={24} />
                        </div>
                    </div>
                    <div className="pt-8" />
                    <div className="flex justify-center items-center">
                        <img
                            alt={''}
                            src={'/img/manhlinh-03.JPG'}
                            className="shadow-lg md:w-1/2"
                        />
                    </div>
                    <div className="pt-8" />
                    <div className="text-center text-theme-main font-['Corinthia'] italic text-5xl">
                        Đức Mạnh -Thùy Linh
                    </div>
                    <div className="container mx-auto px-4 md:px-0">
                        <div className="pt-2" />
                        <motion.div
                            initial={{ x: 0, y: 200 }}
                            whileInView={{ x: 0, y: 0 }}
                            animate={{ x: 0, y: 200 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                ease: 'linear',
                            }}
                        >
                            <div className="box-e text-justify md:w-1/2 text-theme-second font-viao text-lg">
                                Trân trọng mời bạn đến chung vui trong ngày
                                trọng đại của chúng mình! Sự hiện diện, tình yêu
                                và những lời chúc tốt đẹp của bạn khiến ngày vui
                                thêm trọn vẹn.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </>
    )
}
