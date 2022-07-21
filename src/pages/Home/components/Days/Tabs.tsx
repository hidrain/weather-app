import s from './Days.module.scss'

type Props = {}
type Tab = {
    value: string
}

export const Tabs = (props: Props) => {

    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map((tab: Tab) =>
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                )}
            </div>
            <div className={s.cancel}>
                Cancel
            </div>
        </div>
    )
}