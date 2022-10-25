import React from 'react'

export default function Background() {

    const style = {
        position: "absolute",
        top: "0",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundRepeat: "repeat-y",
        minHeight: "120vh",
        height: "fit-content",
        // width: "100vw",
        fontSize: '50px',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        zIndex: "-1",
    }

    return (
        <></>
        // <div style={style} className="container-fluid" >

        // </div>
    )
}

