import { Section } from 'component/section/Section.tsx'

export const WeGettingMarried = () => {
    return (
        <>
            <Section container>
                <div className="flex flex-col items-center pt-4 min-h-screen">
                    <div className="flex justify-center items-center">
                        <img
                            alt={''}
                            src={'/img/manhlinh-03.JPG'}
                            className="shadow-lg rounded-lg md:w-1/2"
                        />
                    </div>
                    <div className="pt-8" />
                    <div className="text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl">
                        We are getting married
                    </div>
                    <div className="pt-4" />
                    <div className="text-justify md:w-1/2 text-theme-second font-viao text-lg">
                        Thật vui vì được gặp và đón tiếp các bạn trong một dịp
                        đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi
                        đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết
                        chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các
                        bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt
                        đẹp mà bạn đã dành cho chúng tôi!
                    </div>
                    <div className="pt-4" />
                    <div className="text-center text-theme-main font-['Hurricane'] italic text-4xl">
                        Đức Mạnh & Thùy Linh
                    </div>
                </div>
            </Section>
        </>
    )
}
