import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Archive from './pages/Archive';
import Lecture from './pages/Lecture';
import TechCV from './pages/TechCV';
import Scripts from './pages/Scripts';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen md:max-w-3xl mx-auto">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/lecture" element={<Lecture />} />
            <Route path="/tech-cv" element={<TechCV />} />
            <Route path="/scripts" element={<Scripts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

