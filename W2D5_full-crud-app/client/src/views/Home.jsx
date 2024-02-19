import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const Home = () => {
  
  // This is to set the list of whatever needs to be listed
  const [animals, setAnimals] = useState([]);

  // useEffect renders after all of the elements of the page has rendered and is called once or after a change is detected inside the [ ] at the end of the function
  useEffect(() => {
    // The Axios request to call all from the DB
    axios.get("http://localhost:8000/api/animals")
      // The .then is for if the promise if fulfilled
      .then((response) => {
        //! Always console.log to see what you get and axios always puts the data in the response.data or the error.data
        console.log(response.data);
        // This sets the list from the data received from the DB if the promise if fulfilled
        setAnimals(response.data);
      })
      // The .catch is to console log the error if the promise isn't fulfilled
      .catch((error) => {
        console.log(error);
      });
  // If the id is changed the page will rerender
  }, []);

  // This function is for the delete button
  const deleteMe = (deleteId) => {
    console.log('This animals id is: ', deleteId)
    // This is the axios request to delete from the server
    axios.delete(`http://localhost:8000/api/animals/${deleteId}`)
      .then((response) => {
        console.log(response)
        //! The item was deleted from the server at this point. But it will still be showed in the page until the page is refreshed
        // This function will filter and output everything except for the ID of the item that was deleted
        const filteredAnimals = animals.filter((eachAnimal) => {
          return eachAnimal._id !== deleteId;
        })
        // This will set the list to all minus the deleted item
        setAnimals(filteredAnimals)
      })
      // This will catch the error and log it to the console
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      {/* This line helps see what comes in while developing the pages */}
      {/* {JSON.stringify(oneAnimal)} */}
      <h2>Home</h2>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Age</th>
            <th>Takes Meds</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* This will map over the list and display everything inside of the animals in a table */}
          {animals.map((animal) => {
            return (
              // The key is needed to avoid errors and to show what is displayed in the tables row
              <tr key={animal._id}>
                {/* This is to show an image from the DB */}
                <td><img src={animal.image} alt={animal.name} width="200px" /></td>
                {/* These are 2 options to display the animal with a link to show it on its own separate page */}
                <td><Link to={`/animals/${animal._id}`}>{animal.name}</Link></td>
                {/* Option 2 to do this would be to do:
                <td><Link to={"/animals/" + animal._id}>{animal.name}</Link></td> */}
                <td>{animal.age}</td>
                {/* This is using a trinary for a conditional display. If true display the ✅ and if false display the ❌ */}
                <td>{animal.takesMeds === true ? "✅" : "❌"}</td>
                <td>
                  {/* This is the delete button that when clicked will pass in the ID of the current item into the deleteMe function above */}
                  <button onClick={() => deleteMe(animal._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;