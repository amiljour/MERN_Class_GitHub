import './App.css';
import Article from './components/Article';

function App() {


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h4>state management</h4>
      <Article title={"Cool"} size={35} />
      <Article title={"Cooler"} size={10} />
      <Article title={"super"} size={22} />
      <Article title={"wow"} size={35} />
    </fieldset>
  );
}

export default App;
