import { Card } from './Card'
import s from './Days.module.scss'
import { Tabs } from './Tabs'

type Props = {}
export type Day = {
    day_name: string
    day_info: string
    icon_id: string
    temp_day: string
    temp_night: string
    info: string
}

export const Days = (props: Props) => {

    const days: Day[] = [
        {
            day_name: 'Today',
            day_info: '28 Aug',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy',
        },
        {
            day_name: 'Tomorrow',
            day_info: '29 Aug',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'little rain and sun',
        },
        {
            day_name: 'We',
            day_info: '30 Aug',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'little rain',
        },
        {
            day_name: 'Th',
            day_info: '28 Aug',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy',
        },
        {
            day_name: 'Fr',
            day_info: '28 Aug',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy',
        },
        {
            day_name: 'Sa',
            day_info: '28 Aug',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy',
        },
        {
            day_name: 'Su',
            day_info: '28 Aug',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy',
        },
    ]

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((day: Day) => <Card day={day} key={day.day_name} />)}
            </div>
        </>
    )
}