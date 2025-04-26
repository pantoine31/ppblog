import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // άλλαξα BrowserRouter σε HashRouter
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Contact from './pages/Contact';
import About from './pages/About';
import Pro from './pages/Pro.js';
import VisitorCounter from "./VisitorCounter";
import posts from './components/posts.json'; // Save articles into posts.json

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

        {/* Counter πάνω από το Footer */}
        <VisitorCounter />

        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
