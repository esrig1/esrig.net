import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav">
        <li>
            <Link to = "/">Home</Link>
        </li>
        <li>
            <Link to = "/about">About</Link>
        </li>
        <li>
            <Link to = "/project">Projects</Link>
        </li>
        <li>
            <Link to = "/about">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

