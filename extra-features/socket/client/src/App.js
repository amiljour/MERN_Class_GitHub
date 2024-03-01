import './App.css';
import io from "socket.io-client";
import React, { useEffect, useState } from 'react';
import Container from './views/Container';

function App() {



  return (
    <div className="App">

      <Container />
    </div>
  );
}

export default App;