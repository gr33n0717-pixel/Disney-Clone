import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Originals from './components/pages/Originals'
import Movies from './components/pages/Movies'
import Watchlist from './components/pages/Watchlist'
import Series from './components/pages/Series'

function App() {

  return (
    <>
    <div className="app">
    <Navbar />
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Watchlist />} />
      <Route path='/' element={<Movies />} />
      <Route path='/' element={<Series />} />
      <Route path='/' element={<Originals />} />
    </Routes>
      {/* <h1>Disney+</h1>
      <p>Welcome to your streaming world</p> */}
    </div>


    </>
  )
}

export default App
