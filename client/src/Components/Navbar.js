import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {

  const imageStyle = {
    height: "10vh"
  }

  const nameStyle = {
    fontSize: "2rem",
    color: "white"
  }

  const name1Style = {
    fontSize: "1.5rem",
    marginLeft: "2vw",
    color: "white"
  }

  const navStyle = {
    // backgroundColor: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)) !important",
    backgroundColor: "rgba(50,50,50,50.5)",
    padding: "0px 10px"
  }

  return (
    <nav>
      <div style={navStyle} className="container-fluid d-flex align-items-center">
        <Link to="../">
          <img style={imageStyle} src="https://i.postimg.cc/3R2b0grK/logo-removebg-preview-1.png" alt="" />
        </Link>
        <Link style={nameStyle} className="btn" to="../">FiTrack</Link>
        <Link style={name1Style} to="/login">Login</Link>
        <Link style={name1Style} to="/reg">Registration</Link>
        <div style={{
          position: "relative",
          top: "0",
          height: "10vh",
          width: "10vw"
        }} className="mx-auto d-flex justify-content-center align-items-center">
          <Link to="/add" className="btn btn-danger">Add Workout</Link>
        </div>
      </div>
    </nav>
  )
}



