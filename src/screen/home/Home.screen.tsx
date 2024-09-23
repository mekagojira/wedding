import { useState, lazy } from 'react'
import { Loading } from 'screen/home/Loading.tsx'

// const Congratulation = lazy(() => import('./Congratulation'))
const WeGettingMarried = lazy(() => import('./WeGettingMarried'))
const SaveTheDate = lazy(() => import('./SaveTheDate'))
const Album = lazy(() => import('./Album'))
const Modal = lazy(() => import('./Modal'))
const HomeHead = lazy(() => import('./Head'))
const Foot = lazy(() => import('./Foot'))

export const HomeScreen = () => {
    const [init, setInit] = useState<number>(0)

    // const el = useRef(null)
    // const child = gsap.utils.selector(el)
    // const tl = gsap.timeline()
    // // gsap.registerPlugin(ScrollTrigger)

    // useEffect(() => {
    //     tl.from(child('h1'), {
    //         scrollTrigger: {
    //             trigger: child('.section'),
    //             toggleActions: 'restart pause resume pause',
    //             scroller: '.page',
    //         },
    //         duration: 2,
    //         opacity: 1,
    //         x: 1000,
    //         ease: 'power3.Out',
    //     })
    // }, [child, el, tl])

    const initOk = () => setInit(init + 1)

    if (!init) return <Loading setInit={initOk} />

    return (
        <main
            // ref={el}
            className="min-h-screen w-screen overflow-hidden page bg-theme-bg"
        >
            <HomeHead />
            <WeGettingMarried />
            <SaveTheDate />
            <Album />
            <Foot />
            <Modal />
        </main>
    )
}
