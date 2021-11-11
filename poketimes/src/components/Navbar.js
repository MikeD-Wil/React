import React from 'react'
import link from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav.nav-wrapper.red.darken-3">
            <div className="container">
                <a href="_"
                className="brand-logo">Poke'Times</a>
                <ul className="right">
                <li><link to="/">Home</a>Home</li>
                <li><link to="/">About</a>About</li>
                <li><link to="/">Contact</a>Contact</li>
            <div>
        </nav>
    )
}

export default Navbar;
