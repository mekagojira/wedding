import { Section } from 'component/section/Section.tsx'
import { HiHeart } from 'react-icons/hi'

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
                        <div className="pt-8" />
                        <div className="box-e text-justify md:w-1/2 text-theme-second font-viao text-lg">
                            Thật vui vì được gặp và đón tiếp các bạn trong một
                            dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi
                            muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để
                            bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó.
                            Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những
                            lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
