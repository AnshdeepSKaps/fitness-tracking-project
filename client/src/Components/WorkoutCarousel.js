import React from "react"
import moment from 'moment'

export default function WorkoutCarousel(props) {

    const textStyle = {
        color: "white"
    }

    let redirect = (event) => {

        let exercise = event.target.innerHTML

        if (exercise === "Barbell Row")
            window.open('https://www.youtube.com/watch?v=RQU8wZPbioA&t=192s')
        if (exercise === "Lat Pulldown")
            window.open('https://www.youtube.com/watch?v=CAwf7n6Luuc')
        if (exercise === "Dumbell Row")
            window.open('https://www.youtube.com/watch?v=pYcpY20QaE8')
        if (exercise === "Bench Press")
            window.open('https://www.youtube.com/watch?v=BYKScL2sgCs&t=430s')
        if (exercise === "Incline Bench Press")
            window.open('https://www.youtube.com/watch?v=DbFgADa2PL8')
        if (exercise === "Overhead Press")
            window.open('https://www.youtube.com/watch?v=2yjwXTZQDDI')
        if (exercise === "DB Chest Press")
            window.open('https://youtube.com')
        if (exercise === "DB Shoulder Press")
            window.open('https://www.youtube.com/watch?v=VmB1G1K7v94')
        if (exercise === "Squat")
            window.open('https://www.youtube.com/watch?v=UFs6E3Ti1jg')
        if (exercise === "Romanian Deadlift")
            window.open('https://www.youtube.com/watch?v=jEy_czb3RKA')
        if (exercise === "Leg Press")
            window.open('https://www.youtube.com/watch?v=IZxyjW7MPJQ')
        if (exercise === "Lunges")
            window.open('https://www.youtube.com/watch?v=D7KaRcUTQeE')
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

            {/* <h2 className='mt-3 mb-5 text-white text-center'>Date: {props.workout.Date.substring(0, 10)}</h2> */}
            <h2 className='mt-3 mb-1 text-white text-center'>Date: {moment(props.workout.Date).format("DD-MM-yy")}</h2>
            <h5 className='mb-3 text-white text-center'>{moment(props.workout.Date).format("dddd")}</h5>

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
