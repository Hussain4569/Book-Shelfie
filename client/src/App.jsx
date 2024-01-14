import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {

  const [onAuth, setOnAuth] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onAuth={onAuth} />
      <Routes>
          <Route path="/" element={<HomePage setOnAuth={setOnAuth} />} />
          <Route path="/login" element={<AuthPage isLogin={true} setOnAuth={setOnAuth} />} />
          <Route path="/register" element={<AuthPage isLogin={false} setOnAuth={setOnAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App