import './App.css';
import { Routes, Route } from 'react-router-dom';
import People from './views/People';
import Form from './components/Form';
import PageError from './views/PageError';

function App() {

  return (
    <>
      <h2>SWAPI</h2>
      <Form />

      <Routes>
        {/* home */}
        <Route path="/" element={<>home</>} />
        <Route path="/planets/:id" element={<>planets</>} />
        <Route path="/people/:id" element={<People />} />
        <Route path='/error' element={<PageError />} />

      </Routes>
    </>
  );
}

export default App;
