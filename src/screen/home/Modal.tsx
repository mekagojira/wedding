export function Modal({ toggle, show }: { show: boolean; toggle: () => void }) {
    const close = () => {
        toggle()
    }

    const submit = () => {
        toggle()
    }

    return (
        <div className="font-['Inter']">
            {show && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-gray-900 z-10 opacity-90"
                    onClick={close}
                />
            )}
            <div
                className={`z-20 fixed ${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{
                    top: '2rem',
                    left: '2rem',
                    width: 'calc(100vw - 4rem)',
                    height: 'calc(100vh - 4rem)',
                    // transform: show ? '' : 'translate(0,100vh)',
                    transition: 'all 0.2s linear',
                }}
            >
                <div
                    className="w-full h-full rounded-lg shadow-lg bg-cover bg-center px-4 py-8 flex flex-col justify-center"
                    style={{ backgroundImage: 'url(/img/manhlinh-02.jpg)' }}
                >
                    {/*<label className="text-theme-main">Xác nhận tham dự</label>*/}
                    <input
                        className="bg-theme-bg px-3 py-5 w-full rounded font-bold uppercase text-theme-main"
                        placeholder="Nhập tên của bạn"
                    />
                    <div className="pt-4" />
                    <button
                        className="bg-theme-main w-full py-3 text-theme-bg"
                        onClick={submit}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    )
}
