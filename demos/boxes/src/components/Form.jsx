import { useState } from "react";
const Form = (props) => {

    const [inputColor, setInputColor] = useState("");
    const [inputSize, setInputSize] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        // long ways
        const tempBox = {
            color: inputColor,
            size: inputSize
        };
        props.stateUpdate(tempBox);

        setInputColor("");
    };

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            inputColor: {JSON.stringify(inputColor)} <br />
            inputSize: {JSON.stringify(inputSize)}
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="color" value={inputColor} onChange={(e) => setInputColor(e.target.value)} />
                <br />
                <input type="number" value={inputSize} onChange={e => setInputSize(e.target.value)} />
                <button>add</button>
            </form>

            <p></p>

        </fieldset>
    );
};

export default Form;