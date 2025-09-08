import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';
import Pro from './pages/Pro.js';
import posts from './components/posts.json'; // kanw Save articles into posts.json
import VisitCounter from "./components/VisitCounter";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BlogList posts={posts} />} />
            <Route path="/post/:id" element={<BlogPost posts={posts} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/proff" element={<Pro />} />
          </Routes>
        </main>



        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;