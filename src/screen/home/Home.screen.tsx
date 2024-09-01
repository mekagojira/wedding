import { HomeHead } from 'screen/home/Head.tsx'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TbClover } from 'react-icons/tb'
import { Modal } from 'screen/home/Modal.tsx'
import { Album } from 'screen/home/Album.tsx'
import { Loading } from 'screen/home/Loading.tsx'
import { Foot } from 'screen/home/Foot.tsx'
import { lazy } from 'react'

const Congratulation = lazy(() => import('./Congratulation'))
const WeGettingMarried = lazy(() => import('./WeGettingMarried'))
const SaveTheDate = lazy(() => import('./SaveTheDate'))

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
            className="min-h-screen w-screen overflow-hidden page bg-theme-bg"
        >
            {!init && <Loading />}
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
                        className="motion-safe:animate-bounce relative py-2 shadow-2xl px-4 bg-theme-main text-theme-bg flex items-center"
                    >
                        <TbClover />
                        <span className="pl-2">Xác nhận tham dự</span>
                    </button>
                </div>
            )}
        </main>
    )
}
