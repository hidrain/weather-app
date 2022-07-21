import React from 'react'
import s from './ThisDayInfo.module.scss'
import { Item } from './ThisDayInfo'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector'

type Props = {
    item: Item
}

export const ThisDayItem = ({ item }: Props) => {

    const { icon_id, name, value } = item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    )
}