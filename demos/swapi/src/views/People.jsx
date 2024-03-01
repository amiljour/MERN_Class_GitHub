import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const People = (props) => {

    const navigate = useNavigate();
    const [person, setPerson] = useState(null);
    const { id } = useParams();
    console.log('id: ', id);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then((res) => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id]);


    return (
        <div>
            {
                person ? <>
                    <h3>{person.name}</h3>
                    <p>height: {person.height}cm</p>

                </> : <h2>loading....</h2>
            }

        </div>
    );
};

export default People;