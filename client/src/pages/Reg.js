import React from 'react'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'

export default function Login() {
    return (
        <div>
            <Navbar />
            <div style={{ height: "70vh" }} className='d-flex align-items-center justify-content-center'>
                <div className='card d-flex align-items-center justify-content-center' style={{ width: "25rem" }}>
                    <h2 className="card-title text-center my-2">Registration</h2>
                    <div className="card-body">
                        <form action={url.url + "login/reg"} method="post">
                            <div style={{ gap: "1rem", display: "grid", gridTemplateRows: "repeat(5, 1fr)", gridTemplateColumns: ".3fr 1fr" }}>
                                <div>Username:</div>
                                <input type="text" name='username' />
                                <div>Password:</div>
                                <input type="password" name='password' />
                                <div>Email:</div>
                                <input type="email" name='email' />
                                <div>Age:</div>
                                <input type="number" name='age' />
                                <div>Contact:</div>
                                <input type="text" name='contact' />
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <input type="submit" className='mt-3 btn btn-success' value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
