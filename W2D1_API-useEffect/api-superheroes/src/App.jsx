import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {

  //               function to change state
  //      state var      |
  //         V           V
  const [heroes, setHeroes] = useState([]);

  const getHeroes = () => {

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((serverResponse) => {
        // ! AXIOS will put the api inside its own .data
        console.log("✅✅✅", serverResponse.data); // [...]
        setHeroes(serverResponse.data);
      })
      .catch(err => console.log("❌❌❌", err));
  };


  return (
    <>
      <h3>superheroes 🦸🦸‍♂️🦸‍♀️🦹🦹‍♂️🦹‍♀️</h3>
      <button onClick={getHeroes}>Get all the heroes</button>
      <hr />
      {/* heroes is {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <tr>
            <td>image</td>
            <td>name</td>
            <td>full name</td>
            <td>publisher</td>
          </tr>
        </thead>

        <tbody>
          {
            heroes.map((hero) => {
              return <tr key={hero.id}>
                <td><img src={hero.images.sm} alt={hero.name} loading='lazy' width="80px" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                <td>{hero.biography.publisher}</td>
              </tr>;
            })
          }



        </tbody>
      </table>
    </>
  );
}

export default App;
