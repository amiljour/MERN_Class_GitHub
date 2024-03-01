import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/animals")
            .then((res) => {
                console.log(res.data);
                setAnimals(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteMe = (deleteId) => {
        console.log("delete", deleteId);
        axios.delete("http://localhost:8000/api/animals/" + deleteId)
            .then((res) => {
                console.log(res.data);
                const filteredAnimals = animals.filter((eachAnimal) => {
                    return eachAnimal._id !== deleteId;
                });
                setAnimals(filteredAnimals);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {/* <div>{JSON.stringify(animals)}</div> */}
            <table>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>age</th>
                        <th>takes meds</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        animals.map((animal) => {
                            return <tr key={animal._id}>
                                <td><img src={animal.image} alt={animal.name} width="150px" /></td>
                                <td><Link to={"/animals/" + animal._id}>{animal.name}</Link></td>
                                <td>{animal.age}</td>
                                <td>{animal.takesMeds ? "✅" : "❌"}</td>
                                {/* <td><input type="checkbox" checked={animal.takesMeds} onChange={}/></td> */}
                                <td> <button onClick={() => deleteMe(animal._id)}>DELETE</button></td>
                            </tr>;
                        })
                    }



                </tbody>
            </table>
        </>
    );
};

export default Home;