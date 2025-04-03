import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTheme from '../pages/HomeTheme'
import OrderTheme from '../pages/OrderTheme'
import ReadyTheme from '../pages/ReadyTheme'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeTheme />} />
                <Route exact path="/home" element={<HomeTheme />} />
                <Route exact path="/order" element={<OrderTheme />} />
                <Route exact path="/ready" element={<ReadyTheme />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
