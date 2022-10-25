import * as React from "react";
import { useState } from "react";
import { url } from '../Components/serverUrl'
import CanvasJSReact from '../CanvasJs/canvasjs.react';
import { Chart } from "react-google-charts";
import Navbar from '../Components/Navbar'

// export const data = [
//     [
//         { type: "date", label: "Day" },
//         { type: "number", label: "Value 1" },
//         { type: "number", label: "Value 2" }
//     ],

//     [new Date("2015-01-01 10:22:26"), 40, 120],
//     [new Date("2015-01-01 10:25:26"), 20, 80],
//     [new Date("2015-01-01 11:35:26"), 20, 80],
//     [new Date("2015-01-01 11:45:26"), 40, 50],
//     [new Date("2015-01-01 12:00:26"), 60, 30],
//     [new Date("2015-01-01 12:07:26"), 20, 80]

// ]

// export const dateTicks = [
//     new Date("2015-01-01 10:02:26"),
//     new Date("2015-01-01 11:07:26"),
//     new Date("2015-01-01 12:07:26")
// ];

export const options = {
    hAxis: {
        format: "dd-MM-yyyy HH:MM",
        // ticks: dateTicks
    },

    width: "1000px",
    height: "500px",

};

export default function Graphs() {

    const [data, setData] = useState(null)

    const graphFunction = async () => {

        const ex = document.getElementById("exercise").value
        const data = { exercise: ex }

        const response = await fetch(url.url + "graph", {
            method: "Post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resp = await response.json()
        console.log(resp)
        setData(resp)
    }


    return (
        <div>

            <Navbar />

            <div className="container">
                <h1 className='mt-5 mb-5 text-white text-center'>Progress Visualized!</h1>
                <div className="form-group d-flex justify-content-center ">
                    <label className='text-white text-center' style={{ fontSize: "1.5rem", marginRight: "20px" }} htmlFor="exercise">Select Exercise: </label>
                    <select id="exercise" name='exercise' className="" style={{ width: "300px", height: "40px", textAlign: "center", fontSize: "1.5rem" }}>
                        <option>Bench Press</option>
                        <option>Incline Bench Press</option>
                    </select>
                    <button onClick={graphFunction} className='ms-3 btn btn-success'>Click</button>
                </div>
            </div>

            {data && <div className="w-100 d-flex justify-content-center mt-5">
                <Chart
                    chartType={"LineChart"}
                    data={data}
                    options={options}
                />
            </div>}

        </div>
    )
}
