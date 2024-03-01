import './App.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './views/Home';
import ShowOne from './views/ShowOne';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {

  return (
    <>
      <h3>Zoo Manager 🤠</h3>
      {/* <Link to="/animals/new">ADD ANIMAL</Link> */}
      <hr />

      {/* set up routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/animals" />} />

        {/* HOME PAGE*/}
        <Route path="/animals" element={<Home />} />

        {/* CREATE PAGE */}
        <Route path="/animals/new" element={<Create />} />

        {/* SHOW ONE PAGE */}
        <Route path="/animals/:id" element={<ShowOne />} />

        {/* EDIT PAGE */}
        <Route path="/animals/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;;
