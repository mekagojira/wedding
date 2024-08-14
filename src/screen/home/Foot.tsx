import { AiFillHeart } from 'react-icons/ai'

export const Foot = () => {
    return (
        <div className="bg-theme-main">
            <div className="mx-auto container">
                <div className="py-8 px-4 md:px-0 text-theme-bg font-['Playfair+Display']">
                    <div className="text-3xl md:text-3xl text-center flex justify-center items-center">
                        Mạnh <div className="pl-1" />
                        <AiFillHeart />
                        <div className="pr-1" /> Linh
                    </div>
                    <div className="pt-4" />
                    <div className="text-xl md:text-2xl text-center">
                        22 . 09 . 2024
                    </div>
                </div>
            </div>
        </div>
    )
}
