import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandPage from './components/LandingPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
      </Routes>
    </Router>
  )
}

export default App