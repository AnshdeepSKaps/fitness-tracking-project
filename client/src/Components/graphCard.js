import React from 'react'
import { Link } from 'react-router-dom'

export default function graphCard() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Graph</h2>
                <p className="card-text text-center">Visualise your progress</p>
                <div className='d-flex justify-content-center'>
                    <Link to="./graphs" className="btn btn-danger">Click</Link>
                </div>
            </div>
        </div>
    )
}
