import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Register from './views/Register';
import DisplayUsers from './views/DisplayUsers';
import Login from './views/Login';
import Cookie from './views/Cookie';
import UserInfo from "./views/UserInfo";

function App() {


  return (
    <div>
      <BrowserRouter>
        <p><Link to="/">Test Cookie</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>|
        <Link to="/users">All users</Link>|
        <Link to="/userInfo"> User info</Link>
        </p>


        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<DisplayUsers />} />  
          <Route path="/userInfo" element={<UserInfo />} />    
          <Route path="/" element={<Cookie />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
