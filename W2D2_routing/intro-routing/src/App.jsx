import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cool from './views/Cool';
import Hero from './views/Hero';

function App() {

  return (
    <>
      <h3>Routing</h3>

      {/* THEATER STAGE */}
      <Routes>

        {/* ACT I - HOME */}
        <Route path="/" element={<Home />} />

        {/* ACT II - Cool */}
        <Route path="/cool" element={<Cool />} />

        {/* ACT III - CATCH ALL */}
        <Route path="*" element={<h3>not found</h3>} />

        {/* ACT IV - GET HERO */}
        <Route path="/hero/:id" element={<Hero />} />


      </Routes>
    </>
  );
}

export default App;
