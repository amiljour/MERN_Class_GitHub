import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate();
  // This is to import the ID using useParams from what is being passed in from the route
  const { id } = useParams();

  // These are the variables to set the states for the edit form and for when the edits are submitted
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [age, setAge] = useState(0)
  const [takesMeds, setTakesMeds] = useState(false)
  // This is the variable for the errors from server validation
  const[errors, setErrors] = useState({})

  // useEffect renders after all of the elements of the page has rendered and is called once or after a change is detected inside the [ ] at the end of the function
  useEffect(() => {
    // The Axios request to call all from the DB
    axios.get(`http://localhost:8000/api/animals/${id}`)
      // The .then will set the variables listed
      .then((response) => {
        console.log(response.data)
        setName(response.data.name)
        setImage(response.data.image)
        setAge(response.data.age)
        setTakesMeds(response.data.takesMeds)
      })
      // The .catch is to console log the error if the promise isn't fulfilled
      .catch((error) => {
        console.log(error)
      })
  // If the id is changed the page will rerender
  }, [id])

  // The function for handling the submission
  const handelSubmit = (e) => {
    // To prevent the page from reloading
    e.preventDefault();
    // To be passed into the axios POST request
    const tempObject = {name, image, age, takesMeds}
    // The axios post request to the DB with the tempObject
    axios.put(`http://localhost:8000/api/animals/${id}`, tempObject)
      // The .then will console log the data and then navigate to the /animals/id route of the animal just created if the promise is fulfilled
      .then((response) => {
        console.log("✅Success✅", response.data)
        navigate("/animals/" + response.data._id)
      })
      // If the promise isn't fulfilled and has an error this will console.log the error and set the variables error with the error data
      .catch((error) => {
        console.log("❌Error❌", error.response.data.errors);
        setErrors(error.response.data.errors)
        console.log(errors)
      })
  }

  return (
    <div>
      <h2>Edit {name}</h2>
      <form onSubmit={handelSubmit}>

        <div>
          <p>Name:</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          {/* This is a if statement/short circuit that will display if the name error message is true */}
          {errors.name && <p style={{color: "red"}}>{errors.name.message}</p> }
        </div>

        <div>
          <p>Image:</p>
          <input value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        
        <div>
          <p>Age:</p>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          {errors.age && <p style={{color: "red"}}>{errors.age.message}</p> }
        </div>
        
        <div>
          <p>Takes Meds?</p>
          <input type="checkbox" checked={takesMeds} onChange={(e) => setTakesMeds(e.target.checked)} />
        </div>
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Edit