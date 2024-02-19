import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import ShowOne from './views/ShowOne'
import Create from './views/Create'
import Edit from './views/Edit'

function App() {

  return (
    <>
      <h1>Zoo Manager</h1>
      <Link to="/animals">Home</Link>
      <br />
      <Link to="/animals/new">Add Animal</Link>
      <hr />

      {/* Set up Routes */}
      <Routes>
        {/* Route  */}
        {/* This will redirect to home if you go here */}
        <Route path="/" element={<Navigate to="/animals" />} />
        {/* Home Page */}
        <Route path="/animals" element={<Home />} />
        {/* Create Page */}
        <Route path="/animals/new" element={<Create />} />
        {/* Show 1 Page */}
        <Route path="/animals/:id" element={<ShowOne />} />
        {/* Edit Page */}
        <Route path="/animals/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App