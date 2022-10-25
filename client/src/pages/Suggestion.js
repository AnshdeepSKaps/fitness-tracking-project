import React from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'

export default function Suggestion() {

    let [resp, setResp] = useState(null)

    let suggest = async () => {

        let inputCondition = document.getElementById("condition").value
        let data = { cond: inputCondition }

        const response1 = await fetch(url.url + "suggest", {
            method: "Post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const response2 = await response1.json();
        setResp(response2)
    }

    const style = {
        height: "25vh",
        background: "rgba(0,0,0,0.7)",
        boxShadow: "rgba(255,255,255,0.2) 0px 0px 20px",
        borderRadius: "20px",
        width: "20vw",
        // border: "2px solid yellow",
        padding: "10px"
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className='mt-5 mb-5 text-white text-center'>Diet and Workout</h1>

                <div className="form-group d-flex justify-content-center ">
                    <label className='text-white text-center' style={{ fontSize: "1.5rem", marginRight: "20px" }} htmlFor="condition">Select your medical condition: </label>
                    <select id="condition" name='condition' className="" style={{ width: "300px", height: "40px", textAlign: "center", fontSize: "1.5rem" }}>
                        <option>Obesity</option>
                        <option>Heart Condition</option>
                        <option>High Blood Pressure</option>
                    </select>
                    <button onClick={suggest} className='ms-3 btn btn-success'>Click</button>
                </div>
            </div>

            <div className='mt-5 container d-flex flex-row justify-content-around'>

                {resp && <div className="d-flex flex-column" style={{ gap: "2rem" }}>
                    <h2 className='mb-4 text-center text-white '>Diet</h2>
                    <div style={style} className="">
                        <h3 className='text-center text-success'>Breakfast</h3>
                        <div className='text-white text-center'>{resp.diet.breakfast}</div>
                    </div>
                    <div style={style} className="">
                        <h3 className='text-center text-warning'>Lunch</h3>
                        <div className='text-white text-center'>{resp.diet.lunch}</div>
                    </div>
                    <div style={style} className="">
                        <h3 className='text-center text-danger'>Dinner</h3>
                        <div className='text-white text-center'>{resp.diet.dinner}</div>
                    </div>
                </div>
                }

                {resp && <div className="workout-column d-flex flex-column" style={{ gap: "2rem" }}>
                    <h2 className='mb-4 text-center text-white'>Workout</h2>
                    {
                        Array.from(resp.workouts).map(e => {
                            return <div style={style} className="d-flex align-items-center justify-content-center">
                                <div className='text-center text-white'>{e[0].toUpperCase() + e.substring(1)}</div>
                            </div>
                        })
                    }
                </div>

                }
            </div>
        </div >
    )
}
