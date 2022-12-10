import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.css'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
