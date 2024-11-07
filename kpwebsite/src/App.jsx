import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Gsoc from './pages/gsoc';
import Teams from './pages/teams';

function App() {
    return (
        <Router>
            <Header /> {/* This will appear on every page */}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gsoc" element={<Gsoc />} />
                    <Route path="/teams" element={<Teams />} />
                </Routes>
            </div>
            <Footer /> {/* This will also appear on every page */}
        </Router>
    );
}

export default App;
