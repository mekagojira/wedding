export default function Congratulation() {
    const info = [
        {
            bank: 'VP Bank',
            name: 'NGUYEN THUY LINH',
            num: '18042014',
            img: '/img/qr-linh.jpg',
            text: 'Đến cô dâu',
            bg: '/gallery/DSC02860.jpg',
        },
        {
            bank: 'Techcombank',
            name: 'NGUYEN DUC MANH',
            num: '9868281198',
            img: '/img/qr-manh.jpeg',
            text: 'Đến chú rể',
            bg: '/gallery/DSC02990.jpg',
        },
    ]

    const desktopView = info.map(item => {
        return (
            <div
                key={item.num}
                style={{
                    backgroundImage: `url(${item.bg})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}
                className="flex flex-col justify-center items-center h-screen px-4 container text-theme-bg"
            >
                <div className="w-full flex flex-col items-center justify-center pt-4 my-8">
                    {/*<div className="uppercase text-lg">{item.text}</div>*/}
                    <div className="pt-4" />
                    <img src={item.img} className="w-32 shadow" alt={''} />
                    <div className={'pt-8'} />
                    <div className="pt-1">Ngân hàng: {item.bank}</div>
                    <div className="pt-1">Tên tài khoản: {item.name}</div>
                    <div className="pt-1">Số tài khoản: {item.num}</div>
                </div>
            </div>
        )
    })

    const mobileView = info.map(item => {
        return (
            <div key={item.num} className="px-4 w-full">
                <div
                    className="w-full h-screen"
                    style={{
                        backgroundImage: `url(img/${item.bg})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex flex-col justify-center items-center h-screen px-4 container text-theme-bg">
                        <div className="pt-40" />
                        <div className="flex w-full">
                            <div className="w-full flex flex-col items-center justify-center my-8">
                                {/*<div className="uppercase text-lg">{item.text}</div>*/}
                                <div className="pt-4" />
                                <img
                                    src={item.img}
                                    className="w-2/3 md:w-96 shadow"
                                    alt={''}
                                />
                                <div className={'pt-8'} />
                                <div className="pt-1">
                                    Ngân hàng: {item.bank}
                                </div>
                                <div className="pt-1">
                                    Tên tài khoản: {item.name}
                                </div>
                                <div className="pt-1">
                                    Số tài khoản: {item.num}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="pb-8">
            <div className="hidden md:block">
                <div>
                    <div className="flex flex-col items-center pb-8">
                        <div className="font-viao text-2xl text-center uppercase shadow-xl font-black bg-theme-main text-theme-bg px-3 py-2">
                            Hộp mừng cưới
                        </div>
                    </div>
                    <div className="flex space-x-8 pb-8">{desktopView}</div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="flex flex-col items-center pb-8">
                    <div className="font-viao text-2xl text-center uppercase shadow-xl font-black bg-theme-main text-theme-bg px-3 py-2">
                        Hộp mừng cưới
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-8">
                    {mobileView}
                </div>
            </div>
        </div>
    )
}
