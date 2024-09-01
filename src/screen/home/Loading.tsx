import { IoHeart } from 'react-icons/io5'
import ReactLoading from 'react-loading'

export function Loading() {
    return (
        <div
            className={`h-screen w-screen top-0 left-0 fixed z-50 bg-theme-bg opacity-100 bg-center bg-cover`}
            style={{
                backgroundImage: `url(/img/manhlinh-banner-03-min.jpg)`,
            }}
        >
            <div className="relative w-full h-full flex flex-col flex-wrap items-center justify-start md:items-end pt-16 md:p-0 backdrop-blur-sm">
                <div className="text-center font-viao text-theme-bg">
                    <div className="text-2xl font-bold font-['Montserrat']">
                        SAVE THE DATE
                    </div>
                    <div className="pt-4 md:pt-8" />
                    <div className="text-4xl md:text-6xl flex">
                        Đức Mạnh <span className="ml-1 md:ml-4" />
                        <IoHeart color="white" />
                        <span className="mr-1 md:mr-3" />
                        Thùy Linh
                    </div>
                    <div className="pt-4 md:pt-8" />
                    <div className=" px-4 md:px-0">
                        <div className="font-viao font-semibold font-['Montserrat'] text-3xl md:text-4xl px-8 py-2 md:py-4 border-2 border-white shadow-2xl focus:bg-white focus:text-transparent active:bg-white active:text-border-theme-main transition-all">
                            22.09.2024
                        </div>
                    </div>
                </div>

                <div className="pt-32" />
                <div className="flex justify-center w-full">
                    <ReactLoading
                        type={'spin'}
                        color={'#fff9f0'}
                        height={64}
                        width={64}
                    />
                </div>
            </div>
        </div>
    )
}
