import { IoHeart } from 'react-icons/io5'
import ReactLoading from 'react-loading'

export function Loading({ show }: { show: boolean }) {
    return (
        <div
            className={`h-screen w-screen top-0 left-0 fixed z-50 bg-theme-bg opacity-100 ${!show ? 'opacity-0' : ''}`}
            style={{
                transition: 'all 0.2s linear',
            }}
        >
            <div className="relative w-full h-full flex flex-col flex-wrap items-start md:items-end items-center pt-16 md:p-0">
                <div className="text-center font-viao text-theme-main">
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
                <ReactLoading
                    type={'spin'}
                    color={'#7a0707'}
                    height={64}
                    width={64}
                />
            </div>
        </div>
    )
}
