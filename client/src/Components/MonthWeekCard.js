import React from 'react'

export default function MonthWeek() {
    return (
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h2 className="card-title text-center mb-4">Last Month</h2>
                <p className="card-text text-center">Overview of your workouts over the month</p>
                <div className='d-flex justify-content-center'>
                    <a href="/" className="btn btn-danger mx-auto w-50">Click</a>
                </div>

            </div>
        </div>
    )
}
