import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/footer/Footer';
import Home from '../src/pages/home'
import Gsoc from '../src/pages/gsoc'
import Teams from '../src/pages/teams'
import Header from './components/header';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
function App() {
    return (
        <Router>
            {/* <Header /> This will appear on every page */}
            <Header/>
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gsoc" element={<Gsoc />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs/>} />
                </Routes>
            </div>
            <Footer /> {/* This will also appear on every page */}
        </Router>
    );
}

export default App;
