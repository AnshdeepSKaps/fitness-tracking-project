import React from 'react'
import AddForm from '../Components/AddForm'
import Background from '../Components/Background'
import Navbar from '../Components/Navbar'

export default function AddWorkout() {

    const headerStyle = {
        fontSize: '3rem',
        marginTop: "40px",
        marginBottom: "40px",
        color: "white",
        textAlign: "center"
    }

    return (
        <div>
            <Navbar />
            <Background />
            <h1 style={headerStyle}>Add Workout</h1>
            <AddForm />
        </div >
    )
}
