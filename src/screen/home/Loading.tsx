export function Loading({ setInit }: { setInit: () => void }) {
    return (
        <>
            <div
                // className={`h-screen w-screen top-0 left-0 fixed z-50 bg-theme-bg opacity-100 bg-center bg-cover`}
                style={{
                    backgroundImage: `url(/img/manhlinh-banner-03-min.jpg)`,
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: 100,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff9f0',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'start',
                        paddingTop: '4rem',
                        backdropFilter: 'blur(8px)', // Adjust blur radius as needed
                    }}
                >
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                            }}
                        >
                            SAVE THE DATE
                        </div>
                        <div style={{ paddingTop: '4px', marginTop: '8px' }} />
                        <div
                            style={{
                                fontSize: '32px',
                                marginTop: '8px',
                                display: 'flex',
                            }}
                        >
                            Đức Mạnh <span style={{ marginLeft: '4px' }} />
                            &
                            <span style={{ marginRight: '4px' }} />
                            Thùy Linh
                        </div>
                        <div style={{ paddingTop: '4px', marginTop: '8px' }} />
                        <div style={{ padding: '8px 0px' }}>
                            <div
                                style={{
                                    fontWeight: 'semibold',
                                    fontSize: '24px',
                                    padding: '8px 16px',
                                    border: '2px solid white',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: 'transparent',
                                    transition:
                                        'background-color 0.2s ease-in-out',
                                    cursor: 'pointer',
                                }}
                            >
                                22.09.2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={'/img/manhlinh-banner-03.jpg'}
                alt="Background"
                loading="lazy"
                onLoad={() => setInit()}
                style={{ display: 'none' }}
            />
            <img
                src={'/img/manhlinh-banner-03-min.jpg'}
                alt="Background"
                loading="eager"
                onLoad={() => setInit()}
                style={{ display: 'none' }}
            />
        </>
    )
}
