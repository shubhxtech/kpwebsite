import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/footer/Footer';
import Header from './components/header';
import Home from '../src/pages/home';
import Gsoc from '../src/pages/gsoc';
import Teams from '../src/pages/teams';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import ScrollToTop from './components/ScrollToTop';
import BlogDetail from './pages/blog/[slug]';
import ProjectDetail from './pages/projects/[slug]'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/gsoc" element={<Gsoc />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
