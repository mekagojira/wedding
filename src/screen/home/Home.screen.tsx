import { HomeHead } from 'screen/home/Head.tsx'
import { WeGettingMarried } from 'screen/home/WeGettingMarried.tsx'

export const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-theme-bg">
            <HomeHead />
            <div className="pt-8 md:pt-32" />
            <WeGettingMarried />
            <div className="pt-8 md:pt-32" />
        </div>
    )
}
