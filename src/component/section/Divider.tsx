export function Divider({ r }: { r?: boolean }) {
    return (
        <div
            className={`flex items-center ${r ? 'justify-start' : 'justify-end'} py-4`}
        >
            <img
                src={'/assets/bg-2.png'}
                alt={''}
                className={`${r ? 'rotate-180' : ''} w-5/6 ${r ? `-translate-x-4` : `translate-x-4`}`}
            />
        </div>
    )
}
