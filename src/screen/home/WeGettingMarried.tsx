import ScrollAnimation from 'react-animate-on-scroll'

export const WeGettingMarried = () => {
    return (
        <ScrollAnimation animateIn="bounceInUp" animateOnce duration={2}>
            <div className="container mx-auto px-4 md:px-0">
                <div className="hidden md:block">
                    <div className="flex justify-center items-center">
                        <div
                            className="bg-center bg-cover border-2 border-theme-main shadow-xl"
                            style={{
                                width: '30vw',
                                height: '30vw',
                                backgroundImage: `url(/img/linh-1.png)`,
                            }}
                        />
                        <div className="pl-8" />
                        <div
                            className="bg-center bg-cover border-2 border-theme-main shadow-xl"
                            style={{
                                width: '30vw',
                                height: '30vw',
                                backgroundImage: `url(/img/linh-2.png)`,
                            }}
                        />
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
                <div className="block md:hidden">
                    <div className="flex justify-center items-center">
                        <div
                            className="bg-center bg-cover border-2 border-theme-main shadow-xl"
                            style={{
                                width: '95vw',
                                height: '95vw',
                                backgroundImage: `url(/img/linh-1.png)`,
                            }}
                        />
                    </div>
                    <div className="pt-8" />
                    <div className="flex justify-center items-center">
                        <div
                            className="bg-center bg-cover border-2 border-theme-main shadow-xl"
                            style={{
                                width: '95vw',
                                height: '95vw',
                                backgroundImage: `url(/img/linh-2.png)`,
                            }}
                        />
                    </div>
                    <div className="pt-12 md:pt-24" />
                    <div className="text-center text-theme-main font-['Montserrat'] font-bold text-xl md:text-3xl">
                        We are getting married
                    </div>
                    <div className="pt-8 md:pt-16" />
                    <div className="text-justify text-theme-second">
                        Thật vui vì được gặp và đón tiếp các bạn trong một dịp
                        đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi
                        đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết
                        chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các
                        bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt
                        đẹp mà bạn đã dành cho chúng tôi!
                    </div>
                    <div className="pt-8 md:pt-16" />
                    <div className="text-center text-theme-main font-['Hurricane'] italic text-4xl md:text-5xl">
                        Thùy Linh & Đức Mạnh
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}
