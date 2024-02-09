import React, { useState } from 'react'
import InputDisplay from '../components/InputDisplay';

const FormPage3 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [flavorErr, setFlavorErr] = useState("");
    const [quantityErr, setQuantityErr] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(flavorErr || quantityErr){
            alert("Invalid form");
        }else{
            const newIcecream = {flavor : flavor, quantity : quantity};
            console.log(newIcecream);
            alert("Form is submitted")
            clearForm();
            setIsSubmitted(true);
        }
    }

    const clearForm = () => {
        setFlavor("Vanilla");
        setQuantity(0);
    }

    const handleMessage = ()=>{
        if(isSubmitted){
            return "Thank you for submitting the form";
        }else{
            return "Welcome, please fill in the form";
        }
    }

    const handleFlavor = (e) =>{
        setFlavor(e.target.value);
        if(e.target.value.length < 3){
            setFlavorErr("Flavor must be at least 3 characters");
        }else{
            setFlavorErr("");
        }
    }

    const handleQuantity = (e)=>{
        setQuantity(e.target.value);
        if(e.target.value < 0){
            setQuantityErr("Quantity must be positive");
        }else{
            setQuantityErr("");
        }
    }

    return (
        <fieldset>
            <legend> FormPage3.jsx</legend>
            <h1>
                {handleMessage()}
            </h1>

            <form onSubmit={handleSubmit}>
            <div>
                <label>Flavor: </label>
                <input 
                    type="text" 
                    name="flavor" 
                    value={flavor}
                    onChange={handleFlavor} />
                <p style={{color: "red"}}>{flavorErr}</p>
            </div>
            <div>
                <label>Quantity : </label>
                <input type="number" name="quantity" value={quantity} 
                onChange={(e) => handleQuantity(e)} />
                <p style={{color: "red"}}>{quantityErr}</p>
            </div>
            <button className="btn btn-success" type="submit" disabled={flavorErr || quantityErr}>Submit</button>
            </form>
            <InputDisplay flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage3