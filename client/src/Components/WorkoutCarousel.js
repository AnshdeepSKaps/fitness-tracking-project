import React from "react"
// import { Link } from 'react-router-dom'

export default function WorkoutCarousel(props) {

    const textStyle = {
        color: "white"
    }

    let redirect = (event) => {
        
        let exercise = event.target.innerHTML
        
        if (exercise === "Barbell Row")
            window.open('https://youtube.com')
        if (exercise === "Lat Pulldown")
            window.open('https://youtube.com')
        if (exercise === "Dumbell Row")
            window.open('https://youtube.com')
        if (exercise === "Bench Press")
            window.open('https://youtube.com')
        if (exercise === "Incline Bench Press")
            window.open('https://youtube.com')
        if (exercise === "Overhead Press")
            window.open('https://youtube.com')
        if (exercise === "DB Chest Press")
            window.open('https://youtube.com')
        if (exercise === "DB Shoulder Press")
            window.open('https://youtube.com')
        if (exercise === "Squat")
            window.open('https://youtube.com')
        if (exercise === "Romanian Deadlift")
            window.open('https://youtube.com')
        if (exercise === "Leg Press")
            window.open('https://youtube.com')
        if (exercise === "Lunges")
            window.open('https://youtube.com')
    }

    return (
        <div style={
            {
                height: "50vh",
                background: "rgba(0,0,0,0.7)",
                boxShadow: "rgba(255,255,255,0.2) 0px 0px 20px",
                borderRadius: "20px",
                width: "70%"
            }} className="mx-auto my-5 py-2">

            <h2 className='mt-3 mb-5 text-white text-center'>Date: {props.workout.Date.substring(0, 10)}</h2>

            <div style={{}} className="ps-4 pe-4">

                <div className="row align-items-center justify-content-center">
                    <div className="col-3 text-white text-center">Exercise</div>
                    <div className="col-1 text-white text-center">Sets</div>
                    <div className="col-1 text-white text-center">Reps</div>
                    <div className="col-1 text-white text-center">Weight(kg)</div>
                    <div className="col-5 text-white text-center">Remarks</div>
                </div>
                <div className="" style={{ width: "100%", background: "white", height: "1px", marginBottom: "15px", marginTop: "10px" }}></div>
    
                {props.workout.Exercises.map((e, i) => {
                    return <div className='row mb-3 align-items-center justify-content-center'>
                        <div onClick={redirect} className='d-flex btn btn-danger col-3 align-items-center justify-content-center'>{e}</div>
                        <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Sets[i]}</div>
                        <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Reps[i]}</div>
                        <div style={textStyle} className='col-1 d-flex align-items-center justify-content-center'>{props.workout.Weights[i]}</div>
                        <div style={textStyle} className='col-5 d-flex align-items-center justify-content-center'>{props.workout.Remarks[i]}</div>
                    </div>
                })}
            </div>
        </div>
    )
}
