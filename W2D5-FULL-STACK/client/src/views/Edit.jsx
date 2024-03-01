import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [age, setAge] = useState(0);
    const [takesMeds, setTakesMeds] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // make api call to our server
        axios.get("http://localhost:8000/api/animals/" + id)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setImage(res.data.image);
                setAge(res.data.age);
                setTakesMeds(res.data.takesMeds);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("edit submit");

        const tempObject = {
            name,
            image,
            age,
            takesMeds
        };

        axios.put(`http://localhost:8000/api/animals/${id}`, tempObject)
            .then((res) => {
                console.log("✅✅✅ SUCCESS", res.data);
                // redirect
                navigate("/animals/" + res.data._id);
            })
            .catch((err) => {
                console.log("❌❌❌ ERROR", err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div>
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
        </div>
    );
};

export default Edit;