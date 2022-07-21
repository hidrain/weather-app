import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from '../../../../assets/images/cloud.png'
import { ThisDayItem } from './ThisDayItem'

type Props = {}
export type Item = {
    icon_id: string,
    name: string,
    value: string,
}

export const ThisDayInfo = (props: Props) => {

    const items = [{
        icon_id: 'temp',
        name: 'Temperature ',
        value: '20° - feels like 17°',
    },
    {
        icon_id: 'pressure',
        name: 'Pressure',
        value: '765 mmHg - normal',
    },
    {
        icon_id: 'precipitation',
        name: 'Humidity',
        value: 'Without precipitations',
    },
    {
        icon_id: 'wind',
        name: 'Wind',
        value: '3 m/s southwest - light wind',
    }]

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) =>
                    <ThisDayItem item={item} key={item.icon_id} />
                )}
            </div>
            <img className={s.cloud_img} src={cloud} alt='cloud' />
        </div>
    )
}