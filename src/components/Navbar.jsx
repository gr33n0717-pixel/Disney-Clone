import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import home from "../assets/home-icon.png";
import search from "../assets/search-icon.png";
import watchlist from "../assets/watchlist-icon.png";
import series from "../assets/series-icon.png";
import movie from "../assets/movie-icon.png";
import logo from "../assets/logo.png";
import original from '../assets/star-icon.png'

const Nav = () => {
  return (
    <nav className="navbar">
      <Link>
      <img className="logo" src={logo} />
      </Link>
      <div className="nav__links">
        <Link to="/">
          <img src={home} />
          HOME
        </Link>
        <Link to="/">
          <img src={search} />
          SEARCH
        </Link>
        <Link path="/watchlist">
          <img src={watchlist} />
          WATCHLIST
        </Link>
        <Link to="/SERIES">
          <img src={series} /> SERIES
        </Link>
        <Link to="/movies">
          <img src={movie} />
          MOVIES
        </Link>
        <Link to="/orignals">
          <img src={original} />
          ORIGINALS
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
