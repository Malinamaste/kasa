// import react framework
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import style sass
import './sass/main.scss';

// import pages by React BrowserRouter
import Home from './pages/Home';
import About from './pages/About';
import SingleHome from './pages/SingleHome.jsx';
import Error from './pages/Error.jsx';

// import components Header + Footer
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rooms/:id" element={<SingleHome />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
