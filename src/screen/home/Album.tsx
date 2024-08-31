import { Section } from 'component/section/Section.tsx'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useRef } from 'react'
import { Divider } from 'component/section/Divider.tsx'

const imgs = [
    '/gallery/MAX06073-min.jpg',
    '/gallery/MAX06100-min.jpg',
    '/gallery/MAX06133-min.jpg',
    '/gallery/MAX06161-min.jpg',
    '/gallery/MAX06232-min.jpg',
    '/gallery/MAX06249-min.jpg',
    '/gallery/MAX06404-min.jpg',
    '/gallery/MAX06469-min.jpg',
].map(item => ({
    original: item,
    thumbnail: item,
}))

export function Album() {
    const gallery = useRef<ImageGallery>(null)

    const fullscreen = () =>
        gallery?.current?.fullScreen && gallery.current.fullScreen()

    return (
        <Section>
            <div className="flex items-center flex-col">
                <div className="pt-2" />
                <div
                    onClick={fullscreen}
                    className="font-viao text-2xl text-center uppercase shadow-lg font-black bg-theme-main text-theme-bg px-3 py-2"
                >
                    Album cưới
                </div>
                <div className="pt-4" />
                <div className="mx-auto container">
                    <ImageGallery
                        items={imgs}
                        ref={gallery}
                        onClick={fullscreen}
                        useBrowserFullscreen={false}
                    />
                </div>
                <div className="py-8">
                    <Divider />
                </div>
            </div>
        </Section>
    )
}
