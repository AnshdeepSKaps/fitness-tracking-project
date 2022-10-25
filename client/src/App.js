import React from 'react';
import Background from './Components/Background';
import HomeContainer from './Components/TrackContainer';
import Navbar from './Components/Navbar';
import Suggestion from './pages/Suggestion';
import Graphs from './pages/graphs';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './pages/Home';
import AddWorkout from './pages/AddWorkout';
import LastWorkout from './pages/LastWorkout';
import LastWeek from './pages/LastWeek';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/add' element={<AddWorkout />} />
                <Route path='/last' element={<LastWorkout />} />
                <Route path='/week' element={<LastWeek />} />
                <Route path='/suggest' element={<Suggestion />} />
                <Route path='/graphs' element={<Graphs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App