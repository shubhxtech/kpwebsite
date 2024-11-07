import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/footer/Footer';
import Home from '../src/pages/home'
import Gsoc from '../src/pages/gsoc'
import Teams from '../src/pages/teams'

function App() {
    return (
        <Router>
            {/* <Header /> This will appear on every page */}
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
