import { HomeHead } from 'screen/home/Head.tsx'
import { WeGettingMarried } from 'screen/home/WeGettingMarried.tsx'
import { SaveTheDate } from 'screen/home/SaveTheDate.tsx'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PiCatLight } from 'react-icons/pi'
import { Modal } from 'screen/home/Modal.tsx'
import { Congratulation } from 'screen/home/Congratulation.tsx'
import { Album } from 'screen/home/Album.tsx'
import { Loading } from 'screen/home/Loading.tsx'
import { Foot } from 'screen/home/Foot.tsx'

export const HomeScreen = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [init, setInit] = useState<number>(0)

    const toggle = () => setOpenModal(!openModal)

    const el = useRef(null)
    const child = gsap.utils.selector(el)
    const tl = gsap.timeline()
    // gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        tl.from(child('h1'), {
            scrollTrigger: {
                trigger: child('.section'),
                toggleActions: 'restart pause resume pause',
                scroller: '.page',
            },
            duration: 2,
            opacity: 1,
            x: 1000,
            ease: 'power3.Out',
        })
    }, [child, el, tl])

    const initOk = () => setInit(init + 1)

    return (
        <main
            // ref={el}
            className="min-h-screen page bg-theme-bg"
        >
            {!init && <Loading show={init < 1} />}
            <HomeHead setInit={initOk} show={init >= 1} />

            <WeGettingMarried />
            <SaveTheDate />
            <Album />
            <Congratulation />
            <Foot />
            <Modal show={openModal} toggle={toggle} />
            {init && (
                <div className="fixed right-0 bottom-0 p-4">
                    <button
                        onClick={toggle}
                        className="py-1 px-4 bg-theme-main text-theme-bg shadow-xl flex items-center"
                    >
                        <PiCatLight size={32} />
                        <span className="pl-4" />
                        Xác nhận tham dự
                    </button>
                </div>
            )}
        </main>
    )
}
