import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [age, setAge] = useState(0);
    const [takesMeds, setTakesMeds] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ name, image, age, takesMeds });
        const tempObject = {
            name,
            image,
            age,
            takesMeds
        };

        axios.post("http://localhost:8000/api/animals", tempObject)
            .then((res) => {
                console.log("✅✅✅ SUCCESS", res.data);
                // redirect
                navigate("/animals");
            })
            .catch((err) => {
                console.log("❌❌❌ ERROR", err.response.data.errors);
                setErrors(err.response.data.errors);
            });

    };

    const doStuff = () => console.log("hi");

    return (
        <div>
            {/* <div>
                name: {JSON.stringify(name)} <br />
                image: {JSON.stringify(image)} <br />
                age: {JSON.stringify(age)} <br />
                takesMeds: {JSON.stringify(takesMeds)} <br />
            </div> */}
            <form onSubmit={handleSubmit}>
                <div>
                    name:
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>

                <div>
                    image:
                    <input value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div>
                    age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                </div>

                <div>
                    takes meds?
                    <input type="checkbox" checked={takesMeds} onChange={(e) => setTakesMeds(e.target.checked)} />
                </div>

                <p></p>
                <input type="submit" value="Submit" />
            </form>
            {/* <button onClick={doStuff}>CANCEL</button> */}

        </div>
    );
};

export default Create;