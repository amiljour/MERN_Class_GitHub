import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const ShowOne = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [oneAnimal, setOneAnimal] = useState(null);

    useEffect(() => {
        // make api call to our server
        axios.get("http://localhost:8000/api/animals/" + id)
            .then((res) => {
                console.log(res.data);
                setOneAnimal(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    // const goToEdit = () => {
    //     navigate(`/animals/${id}/edit`);
    // };

    return (
        <div>
            {/* {JSON.stringify(oneAnimal)} */}
            <h3>oneAnimal: {JSON.stringify(oneAnimal)}</h3>
            {
                oneAnimal !== null ? (
                    <div>
                        <h3>{oneAnimal.name}</h3>
                        <Link to="/">Home</Link> <br />
                        <img src={oneAnimal.image} alt={oneAnimal.name} width="300px" />
                        <p>age: {oneAnimal.age}</p>
                        <p>takes meds? {oneAnimal.takesMeds ? "✅" : "❌"}</p>
                        <button onClick={() => navigate(`/animals/${oneAnimal._id}/edit`)}>EDIT</button>
                    </div>
                ) : <div>loading...</div>
            }

        </div>
    );
};

export default ShowOne;