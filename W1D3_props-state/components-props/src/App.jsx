import './App.css';
import Header from "./components/Header";
import ColorComponent from "./components/ColorComponent";

function App() {

  const color1 = "red";
  const color2 = "green";
  const color3 = "blue";

  return (
    <fieldset>
      <legend>App.jsx</legend>
      🎈🎈🎈🎈
      <Header />
      <ColorComponent color={color1} />
      <ColorComponent color={color2} />
      <ColorComponent color={color3} />


    </fieldset>
  );
}

export default App;
