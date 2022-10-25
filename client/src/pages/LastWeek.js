import React, { useState, useEffect } from 'react'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'
import WorkoutCarousel from '../Components/WorkoutCarousel'

export default function LastWeek() {

    const [workouts, setWorkouts] = useState(null)

    const fetchWorkouts = async () => {

        const resp = await fetch(url.url + 'fetch/week')
        const data = await resp.json()
        setWorkouts(data)
    }

    const textStyle = {
        color: "white",
    }

    useEffect(() => {
        fetchWorkouts()
    }, [])

    return (
        <div>
            <Navbar />
            <h1 className='mt-5 text-center' style={textStyle}>Last 6 Workouts</h1>
            <div className="row">
                {workouts && workouts.map((e, i) => {
                    return <div className="col-md-6">
                        <WorkoutCarousel workout={e} />
                    </div>
                })}
            </div>
        </div>
    )
}




