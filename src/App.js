import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ESForms from './pages/AltWorkflow'
import './App.css'

function App() {
    return (
        <Routes>
            <Route path='/*' element={<ESForms />} />
        </Routes>
    )
}

export default App
