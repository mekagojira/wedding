import axios from 'axios'
import React, { useState } from 'react'
import { TbClover } from 'react-icons/tb'
import { LuMapPin } from 'react-icons/lu'

const endpoint = 'https://wedding-api.manh.moe/plan/register'

export default function Modal() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [guests, setGuests] = useState('')
    const [tour, setTour] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const toggle = () => setOpenModal(!openModal)

    const close = () => {
        toggle()
    }

    const send = async () => {
        try {
            await axios.post(endpoint, { name, phone, guests, tour })
        } catch (e) {
            console.error(e)
        }
    }

    const submit = async (e?: React.FormEvent) => {
        if (e?.preventDefault) e.preventDefault()
        if (loading) return

        setLoading(true)
        await send()
        setLoading(false)
        toggle()
        setName('')
        setPhone('')
        setGuests('')
        setTour(false)
        alert('Xác nhận thành công')
    }

    return (
        <>
            <div className="fixed right-0 bottom-0 p-4 font-['Inter'] text-md font-bold">
                <a
                    href="https://maps.app.goo.gl/647QUG1uvUhA96DW9"
                    target="_blank"
                    className="drop-shadow-2xl relative py-2 shadow-2xl px-4 rounded bg-theme-bg text-theme-main flex items-center w-48 font-viao"
                >
                    <LuMapPin />
                    <span className="pl-2">Xem bản đồ</span>
                </a>
                <div className="pt-2" />
                <button
                    onClick={toggle}
                    className="drop-shadow-2xl relative py-2 shadow-2xl px-4 rounded bg-theme-main text-theme-bg flex items-center w-48 font-viao"
                >
                    <TbClover />
                    <span className="pl-2">Xác nhận tham dự</span>
                </button>
            </div>
            <div>
                {openModal && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-gray-900 z-10 opacity-90"
                        onClick={close}
                    />
                )}
                <div
                    className={`z-20 fixed flex justify-center ${openModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                    style={{
                        top: '2rem',
                        left: '1rem',
                        width: 'calc(100vw - 2rem)',
                        height: '600px',
                        // transform: openModal ? '' : 'translate(0,100vh)',
                        transition: 'all 0.2s linear',
                    }}
                >
                    <form
                        onSubmit={submit}
                        className="w-full h-full font-old-standard text-lg max-w-96 rounded-lg shadow-lg bg-cover bg-center px-4 py-8 flex flex-col justify-end"
                        style={{
                            backgroundImage: 'url(/gallery-thumb/DSC03235.jpg)',
                            // backgroundPositionY: '85px',
                        }}
                    >
                        {/*<label className="text-theme-main">Xác nhận tham dự</label>*/}
                        <input
                            className="bg-theme-bg px-3 py-2 w-full rounded  text-theme-main"
                            placeholder="Nhập tên của bạn"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <div className="pt-2" />
                        <input
                            className="bg-theme-bg px-3 py-2 w-full rounded  text-theme-main"
                            placeholder="SĐT"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <div className="pt-2" />
                        <input
                            className="bg-theme-bg px-3 py-2 w-full rounded  text-theme-main"
                            placeholder="Người thương đi cùng"
                            value={guests}
                            onChange={e => setGuests(e.target.value)}
                        />
                        <div className="pt-4" />
                        <div className="text-white flex items-center">
                            <div className="flex items-center">
                                <label className="flex items-center cursor-pointer relative">
                                    <input
                                        type="checkbox"
                                        checked={tour}
                                        onChange={e =>
                                            setTour(e.target.checked)
                                        }
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-red-600 checked:border-red-600"
                                        id="check2"
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            stroke-width="1"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <span
                                className="pl-2 txt-shadow"
                                onClick={() => setTour(!tour)}
                            >
                                Đi cùng Chuyến xe yêu thương ?
                            </span>
                        </div>
                        <div className="pt-4" />
                        <button
                            className="bg-theme-main w-full py-2 uppercase font-bold text-theme-bg"
                            type="submit"
                        >
                            {!loading ? 'Xác nhận' : '......'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
