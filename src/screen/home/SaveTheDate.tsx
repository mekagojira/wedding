import Calendar from 'react-calendar'

export const SaveTheDate = () => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            <div>
                <Calendar
                    value={new Date('2024-09-22')}
                    showNavigation={false}
                    locale={'vi-vn'}
                    tileClassName="p-2 text-md font-['Montserrat']"
                />
            </div>
        </div>
    )
}
