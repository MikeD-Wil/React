import React, { Component } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from "react-router-dom"
import About from './components/About'
import Contact from'./components/Contact'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
      <div className='App'>
        <Navbar />
      </div>
    )
  }
}

export default App;