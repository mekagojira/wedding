import { Section } from 'component/section/Section.tsx'
import { HiHeart } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Divider } from 'component/section/Divider.tsx'

export const WeGettingMarried = () => {
    return (
        <>
            <Section>
                <div className="py-8">
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
                            className="shadow-lg rounded shadow-xl"
                        />
                    </div>
                    <div className="text-center text-theme-main font-['Corinthia'] italic text-5xl py-8">
                        Đức Mạnh -Thùy Linh
                    </div>
                    <div className="container mx-auto px-4 md:px-0 flex flex-col items-center">
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
                                Sau hơn một thập kỷ đồng hành, cuối cùng đã đến
                                ngày chúng mình trở thành một gia đình. Trân
                                trọng mời bạn đến chung vui trong ngày trọng đại
                                này. Sự hiện diện, tình yêu và những lời chúc
                                tốt đẹp của bạn sẽ làm cho ngày đặc biệt của
                                chúng mình thêm trọn vẹn. Xin chân thành cảm ơn
                                tình cảm của bạn !
                            </div>
                        </motion.div>
                    </div>
                    <div className="py-8">
                        <Divider />
                    </div>
                </div>
            </Section>
        </>
    )
}
