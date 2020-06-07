import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UrlNavbar from './components/Navbar';
import SemiFooter from './components/SemiFooter';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <UrlNavbar />
      <SemiFooter />
      <Footer />
    </Router>
  );
}

export default App;
