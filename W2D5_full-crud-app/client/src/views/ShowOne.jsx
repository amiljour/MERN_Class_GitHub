import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ShowOne = () => {

  const navigate = useNavigate();
  // This is to import the ID using useParams from what is being passed in from the route
  const { id } = useParams();
  const [oneAnimal, setOneAnimal] = useState(null);

  // This function is for the edit button
  const goToEdit = () => {
    navigate("/animals/edit/" + id)
  }

  // useEffect renders after all of the elements of the page has rendered and is called once or after a change is detected inside the [ ] at the end of the function
  useEffect(() => {
    // The Axios request to call all from the DB with the pass in from useParams
    axios.get(`http://localhost:8000/api/animals/${id}`)
      .then((response) => {
        console.log(response.data)
        setOneAnimal(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  // If the id is changed the page will rerender
  }, [id])

  return (
    <div>
      {/* This line helps see what comes in while developing the pages */}
      {/* {JSON.stringify(oneAnimal)} */}
      {
        // This if an if statement that will only load the page if the data isn't null
        oneAnimal !== null ? (
        <div>
          <h3>{oneAnimal.name}</h3>
          <img src={oneAnimal.image} alt={oneAnimal.name} width="300px" />
          <p>Age: {oneAnimal.age}</p>
          <p>Takes Meds? {oneAnimal.takesMeds ? "✅" : "❌"}</p>
          <button onClick={goToEdit}>Edit</button>
        </div>
        ) : <div>Loading...</div>
      }
    </div>
  )
}

export default ShowOne