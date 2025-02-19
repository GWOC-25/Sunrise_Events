import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FloatingInstagram from './components/FloatingInstagram';
import Loading from './components/Loading';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative">
      {isLoading && <Loading />}
      {location.pathname.startsWith('/admin') ? (
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <FloatingInstagram />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;