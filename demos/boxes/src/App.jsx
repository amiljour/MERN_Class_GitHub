import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [boxes, setBoxes] = useState([
    { color: "green", size: 150 },
    { color: "blue", size: 77 }
  ]);

  // function to update state
  const stateUpdate = (newBox) => {
    console.log("hello from App.jsx", newBox);
    setBoxes([...boxes, newBox]);
  };

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h3>boxes 📦</h3>
      Boxes: {JSON.stringify(boxes)} <br />

      <Form stateUpdate={stateUpdate} />
      <Display boxes={boxes} />

    </fieldset>
  );
}

export default App;
