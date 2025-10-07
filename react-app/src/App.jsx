import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RewardEntry from './pages/RewardEntry'
import Dashboard from './pages/Dashboard'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RewardEntry />} />
                <Route path="/dashboard/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
