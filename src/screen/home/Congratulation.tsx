import { Section } from 'component/section/Section.tsx'

export function Congratulation() {
    const info = [
        {
            bank: 'Techcombank',
            name: 'NGUYEN DUC MANH',
            num: '9868281198',
            img: '/img/qr-manh.jpeg',
        },
        {
            bank: 'VP Bank',
            name: 'NGUYEN THUY LINH',
            num: '18042014',
            img: '/img/qr-linh.jpg',
        },
    ]
    return (
        <Section>
            <div className="flex flex-col justify-center items-center h-screen p-4 container">
                <div className="font-viao text-2xl text-center uppercase font-black bg-theme-main text-theme-bg px-3 py-2">
                    Hộp mừng cưới
                </div>
                <div className="flex">
                    <div className="">
                        {info.map((item, i) => {
                            return (
                                <div className="w-full flex flex-col items-center justify-center py-4 border border-theme-main my-8">
                                    <div className="uppercase text-lg">
                                        {i === 0 ? 'Đến chú rể' : 'Đến cô dâu'}
                                    </div>
                                    <div className="pt-4" />
                                    <img
                                        src={item.img}
                                        className="w-1/2"
                                        alt={''}
                                    />
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}
