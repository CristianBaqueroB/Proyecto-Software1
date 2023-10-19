import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Principal from './components/principal'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Pass from './components/Pass'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Principal}/>
          <Route exact path='/login' Component={Login}/>
          <Route exact path='/register' Component={Register}/>
          <Route exact path='/pass' Component={Pass}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
