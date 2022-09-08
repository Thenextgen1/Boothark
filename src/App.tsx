import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Bid, Patronise, Places } from './pages';

function App() {



  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}>
          <Route index element={<Bid />} />
          <Route path="bid" element={<Bid />} />
          <Route path="patronise" element={<Patronise />} />
        </Route>
        <Route path="/places/:placesId" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
