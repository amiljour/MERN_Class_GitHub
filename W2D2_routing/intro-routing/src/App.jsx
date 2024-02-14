import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Cool from './views/Cool';
import Hero from './views/Hero';
import Header from "./components/Header";
import ErrorPage from './views/ErrorPage';
import Form from './views/Form';

function App() {

  return (
    <>
      <h3>Routing</h3>
      <Header />

      {/* THEATER STAGE */}
      <Routes>

        {/* ACT I - HOME */}
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        {/* ACT II - Cool */}
        <Route path="/cool" element={<Cool />} />

        {/* ACT III - CATCH ALL */}
        <Route path="*" element={<h3>not found</h3>} />

        {/* ACT IV - GET HERO */}
        <Route path="/hero/:id" element={<Hero />} />

        {/* ACT V  - Error page*/}
        <Route path="/error" element={<ErrorPage />} />

        {/* ACT VI - FORM */}
        <Route path="/form" element={<Form />} />


      </Routes>
    </>
  );
}

export default App;
