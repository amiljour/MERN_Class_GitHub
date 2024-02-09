import React, { useState } from 'react'
import InputDisplay from '../components/InputDisplay';

const FormPage2 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newIcecream = {flavor : flavor, quantity : quantity};
        console.log(newIcecream);
        clearForm();
        setIsSubmitted(true);
    }

    const clearForm = () => {
        setFlavor("Vanilla");
        setQuantity(0);
    }

    return (
        <fieldset>
            <legend> FormPage2.jsx</legend>
            <h1>
                {
                    isSubmitted?
                    "Thank you for submitting the form":
                    "Welcome, please fill in the form"
                }
            </h1>

            <form onSubmit={handleSubmit}>
            <div>
                <label>Flavor: </label>
                <input 
                    type="text" 
                    name="flavor" 
                    value={flavor}
                    onChange={(e)=>setFlavor(e.target.value)} />
                <p style={{color: "red"}}>
                    {
                        flavor.length <3 &&
                        "Flavor must be at least 3 characters"
                    }
                </p>
            </div>
            <div>
                <label>Quantity : </label>
                <input type="number" name="quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
            </form>
            <InputDisplay flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage2