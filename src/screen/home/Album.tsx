import { Section } from 'component/section/Section.tsx'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useEffect, useRef, useState } from 'react'
import { Divider } from 'component/section/Divider.tsx'
import { IoIosClose } from 'react-icons/io'

const imgs = [
    'DSC01663.jpg',
    'DSC01736.jpg',
    'DSC01780.jpg',
    'DSC01801.jpg',
    'DSC01859.jpg',
    'DSC01918.jpg',
    'DSC01937.jpg',
    'DSC01988.jpg',
    'DSC02031.jpg',
    'DSC02139.jpg',
    'DSC02249.jpg',
    'DSC02330.jpg',
    'DSC02423.jpg',
    'DSC02492.jpg',
    'DSC02512.jpg',
    'DSC02596.jpg',
    'DSC02615.jpg',
    'DSC02631.jpg',
    'DSC02654.jpg',
    'DSC02757.jpg',
    'DSC02782.jpg',
    'DSC02787.jpg',
    'DSC02803.jpg',
    'DSC02811.jpg',
    'DSC02835.jpg',
    'DSC02860.jpg',
    'DSC02939.jpg',
    'DSC02990.jpg',
    'DSC03017.jpg',
    'DSC03170.jpg',
    'DSC03176.jpg',
    'DSC03235.jpg',
    'DSC03346.jpg',
    'DSC03573.jpg',
    'DSC03592.jpg',
    'DSC03696.jpg',
    'DSC03822.jpg',
    'DSC03833.jpg',
    'DSC03991.jpg',
    'MAX06062-min.jpg',
    'MAX06067-min.jpg',
    'MAX06073-min.jpg',
    'MAX06100-min.jpg',
    'MAX06109-min.jpg',
    'MAX06133-min.jpg',
    'MAX06161-min.jpg',
    'MAX06205-min.jpg',
    'MAX06232-min.jpg',
    'MAX06249-min.jpg',
    'MAX06335-min.jpg',
    'MAX06344-min.jpg',
    'MAX06346-min.jpg',
    'MAX06404-min.jpg',
    'MAX06469-min.jpg',
]
    .filter(item => item.endsWith('.jpg'))
    .map((item, i) => ({
        original: `/gallery/${item}`, // Change to your new target
        thumbnail: `/gallery-thumb/${item}`,
        originalAlt: `${i}`,
        thumbnailAlt: `${i}`,
    }))

export default function Album() {
    const gallery = useRef<ImageGallery>(null)
    const [f, setF] = useState<boolean>(false)

    useEffect(() => {
        const state = gallery?.current?.state as {
            isFullscreen: boolean
        } | null
        console.log({ state })

        if (state?.isFullscreen != null) setF(state.isFullscreen)
    }, [gallery?.current?.state])

    const fullscreen = () => {
        gallery?.current?.fullScreen && gallery.current.fullScreen()
        setF(true)
    }

    return (
        <>
            {f && (
                <div
                    className="fixed top-0 cursor-pointer right-0 z-50 p-4"
                    onClick={() => {
                        setF(false)
                        gallery?.current?.exitFullScreen &&
                            gallery.current.exitFullScreen()
                    }}
                >
                    <IoIosClose color={'white'} size={32} />
                </div>
            )}
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
        </>
    )
}
