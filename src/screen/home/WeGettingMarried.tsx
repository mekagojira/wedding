import { Section } from 'component/section/Section.tsx'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useRef } from 'react'

export const WeGettingMarried = () => {
    const imgs = [
        '/gallery/MAX06062-min.jpg',
        '/gallery/MAX06067-min.jpg',
        '/gallery/MAX06073-min.jpg',
        '/gallery/MAX06100-min.jpg',
        '/gallery/MAX06109-min.jpg',
        '/gallery/MAX06133-min.jpg',
        '/gallery/MAX06161-min.jpg',
        '/gallery/MAX06205-min.jpg',
        '/gallery/MAX06232-min.jpg',
        '/gallery/MAX06249-min.jpg',
        '/gallery/MAX06335-min.jpg',
        '/gallery/MAX06344-min.jpg',
        '/gallery/MAX06346-min.jpg',
        '/gallery/MAX06404-min.jpg',
        '/gallery/MAX06469-min.jpg',
    ].map(item => ({
        original: item,
        thumbnail: item,
        thumbnailClass: 'h-64',
    }))

    const gallery = useRef<ImageGallery>(null)

    return (
        <>
            <Section container>
                <div className="flex h-screen items-center flex-col">
                    <div className="pt-8" />
                    <div
                        onClick={() =>
                            gallery?.current?.fullScreen &&
                            gallery.current.fullScreen()
                        }
                        className="font-viao text-2xl text-center uppercase shadow-lg font-black bg-theme-main text-theme-bg px-3 py-2"
                    >
                        Album cưới
                    </div>
                    <div className="pt-4" />
                    <ImageGallery items={imgs} ref={gallery} />
                </div>
            </Section>
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
