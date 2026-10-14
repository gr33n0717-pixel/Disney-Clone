import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './Nav.css'
import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/watchlist">Watchlist</Link>
      <Link to="/originals">Originals</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    )
}

export default Nav