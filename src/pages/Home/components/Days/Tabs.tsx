import s from './Days.module.scss'

type Props = {}
type Tab = {
    value: string
}

export const Tabs = (props: Props) => {

    const tabs = [
        {
            value: 'Weekly',
        },
        {
            value: '10 days',
        },
        {
            value: 'Monthly',
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