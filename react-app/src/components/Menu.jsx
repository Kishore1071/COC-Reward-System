import React, { useState } from "react";
import "./Menu.css";
import logo from "../assets/clash-of-clans.jpg"
import { NavLink } from "react-router-dom";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = () => {
        alert("Logged out! 😄")
        // You can replace this with your actual logout logic
    }

    return (

        <nav className="navbar">
        <div className="nav-left">
            <img src={logo} alt="Logo" className="logo" />
            <h2 className="nav-title">COC Reward Tracker</h2>
        </div>

        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
            <NavLink to={'/dashboard/'}>Dashboard</NavLink>
            <NavLink to={'/'}>Reward Entries</NavLink>
        </div>

        <div className="nav-right">
            <span className="username">Hi, Kishore</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
        </div>
        </nav>
    )
}

export default Menu;
