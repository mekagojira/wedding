import { HomeHead } from 'screen/home/Head.tsx'
import { WeGettingMarried } from 'screen/home/WeGettingMarried.tsx'
import { Event } from 'screen/home/Event.tsx'
import { SaveTheDate } from 'screen/home/SaveTheDate.tsx'
import { useState } from 'react'

let timeout: number | null = null

export const HomeScreen = () => {
    const items = [
        <HomeHead />,
        <WeGettingMarried />,
        <SaveTheDate />,
        // <Event />,
    ]
    const [idx, setIdx] = useState(0)

    const handleScroll = () => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            console.log('idx')
            setIdx(idx >= items.length - 1 ? 0 : idx + 1)
        }, 100)
    }

    return (
        <div
            className="min-h-screen bg-theme-bg"
            onWheel={handleScroll}
            onScroll={handleScroll}
        >
            {/*{items[idx]}*/}
            <HomeHead />
            {/*<div className="pt-8 md:pt-32" />*/}
            <WeGettingMarried />
            {/*<div className="pt-8 md:pt-32" />*/}
            <SaveTheDate />
            {/*<div className="pt-8 md:pt-32" />*/}
            <Event />
            {/*<div className="pt-8 md:pt-32" />*/}
            {/*<Foot />*/}
        </div>
    )
}
