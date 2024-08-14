import { HomeHead } from 'screen/home/Head.tsx'
import { WeGettingMarried } from 'screen/home/WeGettingMarried.tsx'
import { Event } from 'screen/home/Event.tsx'
import { Foot } from 'screen/home/Foot.tsx'

export const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-theme-bg">
            <HomeHead />
            <div className="pt-8 md:pt-32" />
            <WeGettingMarried />
            <div className="pt-8 md:pt-32" />
            <Event />
            <div className="pt-8 md:pt-32" />
            <Foot />
        </div>
    )
}
