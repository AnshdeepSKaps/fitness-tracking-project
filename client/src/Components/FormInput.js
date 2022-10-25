import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function FormInput(props) {

    const [date, setDate] = useState(null)

    const handleDelete = () => {
        props.remove(props.id)
    }

    return (
        <div className='mt-3' >
            <div className="row">

                <div className="col-1">
                    <img onClick={handleDelete} className='btn' style={{ height: "6vh" }} src="https://i.postimg.cc/LX3KV2St/red-x.png" alt="" />
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <select name='exercises' className="form-control" >
                            <option>Exercise</option>
                            <option>Barbell Row</option>
                            <option>Lat Pulldown</option>
                            <option>Dumbell Row</option>
                            <option>Bench Press</option>
                            <option>Incline Bench Press</option>
                            <option>Overhead Press</option>
                            <option>DB Chest Press</option>
                            <option>DB Shoulder Press</option>
                            <option>Squat</option>
                            <option>Romanian Deadlift</option>
                            <option>Leg Press</option>
                            <option>Lunges</option>
                        </select>
                    </div>
                </div>

                <div className="col-1">
                    <input type="number" name='sets' className="form-control" placeholder="Sets" />
                </div>

                <div className="col-1">
                    <input type="number" name='reps' className="form-control" placeholder="Reps" />
                </div>

                <div className="col-1">
                    <input type="number" step="0.01" name='weights' className="form-control" placeholder="Weight" />
                </div>

                <div className="col-5">
                    <input type="text" name='remarks' className="form-control" placeholder="Remarks" />
                </div>
            </div>
        </div >
    )
}
