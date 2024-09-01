import { Section } from 'component/section/Section.tsx'
import { HiHeart } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Divider } from 'component/section/Divider.tsx'
import { useEffect, useState } from 'react'

export const WeGettingMarried = () => {
    const [guest, setGuest] = useState<string>('')

    useEffect(() => {
        const search = new URLSearchParams(window.location.search)
        setGuest(search.get('guest') || search.get('g') || '')
    }, [])

    return (
        <>
            <Section>
                <div className="py-8 flex justify-center">
                    <Divider r={true} />
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-center text-theme-main font-viao text-2xl font-bold flex pb-4">
                        <div className="-rotate-45">
                            <HiHeart size={24} />
                        </div>
                        <span className="">We are getting married</span>
                        <div className="rotate-45">
                            <HiHeart size={24} />
                        </div>
                    </div>
                    <div className="flex p-4 justify-center items-center">
                        <img
                            alt={''}
                            src={'/img/manhlinh-03.JPG'}
                            className="shadow-lg rounded md:w-1/2 shadow-xl"
                        />
                    </div>
                    <div className="text-center text-theme-main font-['Corinthia'] italic text-5xl py-8">
                        Đức Mạnh -Thùy Linh
                    </div>
                    <div className="container mx-auto px-4 md:px-0 flex items-center justify-center">
                        <div className="md:w-1/2">
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
                                <div className="box-e md:p-8 text-justify text-theme-second font-viao text-lg">
                                    Sau hơn một thập kỷ đồng hành, cuối cùng đã
                                    đến ngày chúng mình trở thành một gia đình.
                                    Trân trọng mời {guest || 'bạn'} đến chung
                                    vui trong ngày trọng đại này. Sự hiện diện,
                                    tình yêu và những lời chúc tốt đẹp của bạn
                                    sẽ làm cho ngày đặc biệt của chúng mình thêm
                                    trọn vẹn. Xin chân thành cảm ơn tình cảm của
                                    bạn !
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="py-8">
                        <Divider />
                    </div>
                </div>
            </Section>
        </>
    )
}
