import { AiFillHeart } from 'react-icons/ai'

export default function Foot() {
    return (
        <div className="bg-theme-main">
            <div className="mx-auto container">
                <div className="pb-16 pt-8 px-4 md:p-8 text-theme-bg font-viao">
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
