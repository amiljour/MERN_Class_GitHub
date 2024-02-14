import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const navigate = useNavigate();

    const [idInput, setIdInput] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/hero/" + idInput);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={idInput} onChange={e => setIdInput(e.target.value)} />
                <button>go</button>
            </form>
        </div>
    );
};

export default Form;