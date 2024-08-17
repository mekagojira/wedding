import Calendar from 'react-calendar'

export const SaveTheDate = () => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            <div className="text-center font-['Old+Standard+TT'] md:text-2xl">
                <div className="text-xl font-thin">Trân trọng kính mời</div>
                <div className="text-xl font-thin">
                    Đến dự buổi tiệc chung vui của chúng tôi tại
                </div>
                <div className=" font-['Hurricane'] text-2xl md:text-8xl my-4 md:my-8">
                    W.Jardin
                </div>
                <div className="text-lg">307 Nguyễn Văn Linh</div>
                <div className="text-lg">Dư Hàng Kênh, Lê Chân, Hải Phòng</div>
                <div className="pt-8" />
                <div className="text-2xl md:text-6xl">22 . 09 . 2024</div>
                <div className="pt-8" />
                <div className="text-xl font-thin">
                    Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình
                    chúng tôi.
                </div>
            </div>

            <div className="pt-4 md:pt-16" />

            <div className="flex items-center justify-center">
                <div className="w-full md:w-1/2">
                    <Calendar
                        value={new Date('2024-09-22')}
                        showNavigation={false}
                        locale={'vi-vn'}
                        tileClassName="p-2 text-md font-['Montserrat']"
                    />
                </div>
            </div>
        </div>
    )
}
