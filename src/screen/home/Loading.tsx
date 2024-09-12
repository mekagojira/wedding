import { IoHeart } from 'react-icons/io5'
import { useEffect, useState } from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export function Loading({ setInit }: { setInit: () => void }) {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    )

    useEffect(() => {
        const d = getWindowDimensions()
        if (d.width >= 768) setInit()

        setWindowDimensions(d)
    }, [])

    const isDesktop = windowDimensions.width >= 768

    if (isDesktop) return null

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
                    fontFamily: 'serif',
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
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                            }}
                        >
                            SAVE THE DATE
                        </div>
                        <div style={{ paddingTop: '4px', marginTop: '8px' }} />
                        <div
                            style={{
                                fontSize: '2.25rem',
                                marginTop: '8px',
                                display: 'flex',
                            }}
                        >
                            Đức Mạnh <span style={{ marginLeft: '4px' }} />
                            <IoHeart color="white" />
                            <span style={{ marginRight: '4px' }} />
                            Thùy Linh
                        </div>
                        <div style={{ paddingTop: '4px', marginTop: '8px' }} />
                        <div style={{ padding: '8px' }}>
                            <div
                                style={{
                                    fontWeight: 'semibold',
                                    fontSize: '1.5rem',
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
                src={'/img/manhlinh-banner-03-min.jpg'}
                alt="Background"
                loading="eager"
                style={{ display: 'none' }}
            />
            <img
                src={'/img/manhlinh-banner-03.jpg'}
                alt="Background"
                onLoad={() => setInit()}
                style={{ display: 'none' }}
            />
        </>
    )
}
