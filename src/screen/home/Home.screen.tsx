import { HomeHead } from 'screen/home/Head.tsx'
import { WeGettingMarried } from 'screen/home/WeGettingMarried.tsx'
import { SaveTheDate } from 'screen/home/SaveTheDate.tsx'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const HomeScreen = () => {
    const el = useRef(null)
    const child = gsap.utils.selector(el)
    const tl = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger)

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

    return (
        <main ref={el} className="min-h-screen page bg-theme-bg">
            <HomeHead />
            <WeGettingMarried />
            <SaveTheDate />
        </main>
    )
}
