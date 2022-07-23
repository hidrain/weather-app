import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'

type Props = {
    weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>
                        {Math.round(weather.main.temp)}°
                    </div>
                    <div className={s.this__day_name}>Today</div>
                </div>
                <GlobalSvgSelector id='sun' />
            </div>

            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Time: <span>21:54</span>
                </div>
                <div className={s.this__city}>
                    City: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    )
}