import { Section } from 'component/section/Section.tsx'

export const WeGettingMarried = () => {
    return (
        <>
            <Section container>
                <div className="hidden md:block">
                    <div className="flex justify-center items-center">
                        <div
                        // className="bg-center bg-cover border-2 border-theme-main shadow-xl"
                        // style={{
                        //     width: '80vw',
                        //     height: '25vh',
                        //     backgroundImage: `url(/img/manhlinh-03.JPG)`,
                        // }}
                        >
                            <div className="flex justify-center">
                                <img
                                    alt=""
                                    src={'/img/manhlinh-03.JPG'}
                                    className="w-full md:w-1/2 shadow-lg rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 md:pt-24" />
                    <div className="text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl">
                        We are getting married
                    </div>
                    <div className="pt-8" />
                    <div className="w-full flex justify-center items-center">
                        <div className="text-justify text-theme-second w-1/2">
                            Thật vui vì được gặp và đón tiếp các bạn trong một
                            dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi
                            muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để
                            bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó.
                            Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những
                            lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!
                        </div>
                    </div>
                    <div className="pt-8 md:pt-16" />
                    <div className="text-center text-theme-main font-['Hurricane'] italic text-4xl md:text-5xl">
                        Đức Mạnh & Thùy Linh
                    </div>
                </div>
                <div className="flex flex-col justify-center md:hidden min-h-screen">
                    <div className="flex justify-center items-center">
                        <img
                            alt={''}
                            src={'/img/manhlinh-03.JPG'}
                            className="shadow-lg rounded-lg"
                        />
                    </div>
                    <div className="pt-12 md:pt-24" />
                    <div className="text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl">
                        We are getting married
                    </div>
                    <div className="pt-8 md:pt-16" />
                    <div className="text-justify text-theme-second font-['Playfair+Display']">
                        Thật vui vì được gặp và đón tiếp các bạn trong một dịp
                        đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi
                        đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết
                        chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các
                        bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt
                        đẹp mà bạn đã dành cho chúng tôi!
                    </div>
                    <div className="pt-8 md:pt-16" />
                    <div className="text-center text-theme-main font-['Hurricane'] italic text-4xl md:text-5xl">
                        Đức Mạnh & Thùy Linh
                    </div>
                </div>
            </Section>
        </>
    )
}
