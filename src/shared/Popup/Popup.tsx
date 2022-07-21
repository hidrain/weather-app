import s from './Popup.module.scss'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'

type Props = {}

export const Popup = (props: Props) => {

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
        name: 'Precipitation',
        value: 'Without precipitations',
    },
    {
        icon_id: 'wind',
        name: 'Wind',
        value: '3 m/s southwest - light wind',
    }]

    return (
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>

                <div className={s.day}>
                    <div className={s.day__temp}>20°</div>
                    <div className={s.day__name}>Среда</div>
                    <div className={s.day__img}>
                        <GlobalSvgSelector id='sun' />
                    </div>
                    <div className={s.day__time}>
                        Time: <span>21:54</span>
                    </div>
                    <div className={s.day__city}>
                        City: <span>Saint Petersburg</span>
                    </div>
                </div>

                <div className={s.this__day_info_items}>
                    {items.map((item: Item) =>
                        <ThisDayItem item={item} key={item.icon_id} />
                    )}
                </div>

                <div className={s.close}>
                    <GlobalSvgSelector id='close' />
                </div>

            </div>
        </>
    )
}