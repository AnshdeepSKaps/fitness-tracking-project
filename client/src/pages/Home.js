import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'
import Background from '../Components/Background'
import TrackContainer from '../Components/TrackContainer'
import SuggestionCard from '../Components/suggestionCard'

export default function Home() {

    useEffect(() => {
        url.auth()
    })

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
            <h1 style={headerStyle}>Diet and Workout Suggestion</h1>
            <div className="container">
                <div className="row d-flex flex-row justify-content-around">
                    <SuggestionCard />
                </div>
            </div>

            <h1 style={headerStyle}>Track Your Progress!</h1>
            <TrackContainer />
        </div>
    )
}
