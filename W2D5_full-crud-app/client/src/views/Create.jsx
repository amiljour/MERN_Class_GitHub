import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

  const navigate = useNavigate()

  // These are the variables to set the states for the form
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [age, setAge] = useState(0)
  const [takesMeds, setTakesMeds] = useState(false)
  // This is the variable for the errors from server validation
  const[errors, setErrors] = useState({})

  // The function for handling the submission
  const handelSubmit = (e) => {
    // To prevent the page from reloading
    e.preventDefault();
    // To be passed into the axios POST request
    const tempObject = {name, image, age, takesMeds}
    // The axios post request to the DB with the tempObject
    axios.post("http://localhost:8000/api/animals", tempObject)
      // The .then will console log the data and then navigate to the /animals route if the promise is fulfilled
      .then((response) => {
        console.log("✅Success✅", response.data)
        navigate("/animals")
      })
      // If the promise isn't fulfilled and has an error this will console.log the error and set the variables error with the error data
      .catch((error) => {
        console.log("❌Error❌", error.response.data.errors);
        setErrors(error.response.data.errors)
      })
  }

  return (
    <div>
      <h2>Add Animal</h2>
      
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
          {/* This is a if statement/short circuit that will display if the name error message is true */}
          {errors.age && <p style={{color: "red"}}>{errors.age.message}</p> }
        </div>
        
        <div>
          <p>Takes Meds?</p>
          <input type="checkbox" checked={takesMeds} onChange={(e) => setTakesMeds(e.target.checked)} />
        </div>
        
        <button>Submit</button>
        <Link to="/animals"><button>Cancel</button></Link>
      </form>
    </div>
  )
}

export default Create