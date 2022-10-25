import React from 'react'
import SevenDays from './6daysCard'
import MonthWeek from './MonthWeekCard'
import LastWorkoutCard from './LastWorkoutCard'
import GraphCard from './graphCard'

export default function TrackContainer() {
    return (
        <div className="container">
            <div className="row d-flex flex-row justify-content-around">
                <LastWorkoutCard />
                <GraphCard />
                <SevenDays />
            </div>
        </div>
    )
}
