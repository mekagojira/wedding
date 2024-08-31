import { Section } from 'component/section/Section.tsx'

export function Congratulation() {
    const info = [
        {
            bank: 'VP Bank',
            name: 'NGUYEN THUY LINH',
            num: '18042014',
            img: '/img/qr-linh.jpg',
            text: 'Đến cô dâu',
            bg: 'linh-4.jpg',
        },
        {
            bank: 'Techcombank',
            name: 'NGUYEN DUC MANH',
            num: '9868281198',
            img: '/img/qr-manh.jpeg',
            text: 'Đến chú rể',
            bg: 'linh-4.jpg',
        },
    ]

    return info.map(item => {
        return (
            <Section
                style={{
                    backgroundImage: `url(img/${item.bg})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col justify-center items-center h-screen p-4 container text-theme-bg">
                    <div className="font-viao text-2xl text-center uppercase shadow-lg font-black bg-theme-main text-theme-bg px-3 py-2">
                        Hộp mừng cưới
                    </div>
                    <div className="pt-32" />
                    <div className="flex w-full">
                        <div className="w-full flex flex-col items-center justify-center py-4 border border-theme-second my-8">
                            <div className="uppercase text-lg">{item.text}</div>
                            <div className="pt-4" />
                            <img
                                src={item.img}
                                className="w-2/3 shadow"
                                alt={''}
                            />
                            <div className={'pt-8'} />
                            <div className="pt-1">Ngân hàng: {item.bank}</div>
                            <div className="pt-1">
                                Tên tài khoản: {item.name}
                            </div>
                            <div className="pt-1">Số tài khoản: {item.num}</div>
                        </div>
                    </div>
                </div>
            </Section>
        )
    })
}
