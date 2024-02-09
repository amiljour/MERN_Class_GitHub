import React, { useState } from 'react'
import InputDisplay from '../components/InputDisplay';

const FormPage1 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0)

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newIcecream = {flavor : flavor, quantity : quantity};
        console.log(newIcecream);
        clearForm();
    }

    const clearForm = () => {
        setFlavor("Vanilla");
        setQuantity(0);
    }

    return (
        <fieldset>
            <legend> FormPage1.jsx</legend>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Flavor: </label>
                <input 
                    type="text" 
                    name="flavor" 
                    value={flavor}
                    onChange={(e)=>setFlavor(e.target.value)} />
            </div>
            <div>
                <label>Quantity : </label>
                <input type="number" name="quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
            </form>
            <div>
                <p>State Flavor in FormPage: {flavor}</p>
                <p>State Quantity in FormPage: {quantity}</p>
            </div>
            <InputDisplay flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage1