import React from 'react'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'

export default function Login() {

    return (
        <div>
            <Navbar />
            <div style={{ height: "70vh" }} className='d-flex align-items-center justify-content-center'>
                <div className='card d-flex align-items-center justify-content-center' style={{ width: "25rem" }}>
                    <div className="card-body ps-1 pe-1">
                        <h2 className="card-title text-center mb-4">Login</h2>
                        <form action={url.url + "login"} method="post">
                            <div>Username:</div>
                            <input type="text" name='username' />
                            <div>Password:</div>
                            <input type="password" name='password' />
                            <br />
                            <input type="submit" className='mt-3 btn btn-success' value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
