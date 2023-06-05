import React from 'react'
import Navbar from '../Components/Navbar'
import { url } from '../Components/serverUrl'

export default function Login() {

    const submitForm = async () => {

        const postData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }

        // console.log(postData)

        const res = await fetch(url.url + 'login', {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
        })

        const data = await res.json()

        // console.log(data)

        if (data.status === "ok") {
            window.location = url.client
        }

        if (data.status === "invalid") {
            document.getElementById("invalid-credentials").style.display = "inline"
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ height: "70vh" }} className='d-flex align-items-center justify-content-center'>
                <div className='card d-flex align-items-center justify-content-center' style={{ width: "25rem" }}>
                    <div className="card-body ps-1 pe-1">
                        <h4 id="invalid-credentials" style={{ display: "none" }} className='text-danger text-center'>Invalid Credentials</h4>
                        <h2 className="card-title text-center mb-4">Login</h2>
                        <form method="post">
                            <div>Username:</div>
                            <input id="username" type="text" name='username' />
                            <div>Password:</div>
                            <input id="password" type="password" name='password' />
                            <br />
                            <input onClick={submitForm} className='mt-3 btn btn-success' value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
