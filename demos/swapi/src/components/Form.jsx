import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("planets");
    const [id, setId] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                search for:
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="people">People 👲</option>
                    <option value="planets">Planets 🌍</option>
                </select>

                ID:
                <input type="number" value={id} onChange={e => setId(e.target.value)} />

                <button>Search</button>
            </form>

        </div>
    );
};

export default Form;