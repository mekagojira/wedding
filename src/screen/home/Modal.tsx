import axios from 'axios'
import React, { useState } from 'react'
import { TbClover } from 'react-icons/tb'

const endpoint = 'https://wedding-api.manh.moe/plan/register'

export default function Modal() {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [guests, setGuests] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const toggle = () => setOpenModal(!openModal)

    const close = () => {
        toggle()
    }

    const send = async () => {
        try {
            await axios.post(endpoint, { name, phone, guests })
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
        setPhone('')
        alert('Xác nhận thành công')
    }

    return (
        <>
            <div className="fixed right-0 bottom-0 p-4">
                <button
                    onClick={toggle}
                    className="motion-safe:animate-bounce relative py-2 shadow-2xl px-4 bg-theme-main text-theme-bg flex items-center"
                >
                    <TbClover />
                    <span className="pl-2">Xác nhận tham dự</span>
                </button>
            </div>
            <div className="font-['Inter']">
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
                        className="w-full h-full max-w-96 rounded-lg shadow-lg bg-cover bg-center px-4 py-8 flex flex-col justify-end"
                        style={{
                            backgroundImage: 'url(/img/bg-003.jpg)',
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
