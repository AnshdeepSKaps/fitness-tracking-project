import React from 'react'
import { Link } from 'react-router-dom'


export default function suggestionCard() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body ps-1 pe-1">
                <h2 className="card-title text-center mb-4">Suggestions</h2>
                <p className="card-text text-center">Click here for diet and workout suggestions by stating your health condition(s)</p>
                <div className='d-flex justify-content-center'>
                    <Link to="./suggest" className="btn btn-danger">Click</Link>
                </div>
            </div>
        </div>
    )
}
