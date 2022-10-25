import React from 'react'
import { Link } from 'react-router-dom'

export default function SevenDays() {
    return (
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h2 className="card-title text-center mb-4">Last 6 days</h2>
                <p className="card-text text-center">Get a glimpse of your last 6 workouts</p>
                <div className='d-flex justify-content-center'>
                    <Link to="./week" className="btn btn-danger">Click</Link>
                </div>

            </div>
        </div>
    )
}
