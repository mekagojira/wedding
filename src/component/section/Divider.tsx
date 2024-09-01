export function Divider({ r }: { r?: boolean }) {
    return (
        <div
            className={`flex items-center ${r ? 'justify-start' : 'justify-end'} py-4 overflow-hidden`}
        >
            <img
                src={'/assets/bg-2.png'}
                alt={''}
                className={`${r ? 'rotate-180' : ''} w-5/6 md:w-96 ${r ? `-translate-x-4` : `translate-x-4`}`}
            />
        </div>
    )
}
