import React, { useState } from 'react'
import InputDisplay from '../components/InputDisplay';

const OrderPage = () => {
    const [icecreamList , setIcecreamList] = useState([
        {flavor : "Vanilla" ,  quantity : 1},
        {flavor : "Oreo" ,  quantity : 2}
    ])

    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0)

    const handleSubmit =(e)=>{
        e.preventDefault();
        const newIcecream = {flavor : flavor, quantity : quantity};
        addIcecreamToList(newIcecream)
        console.log(newIcecream);
        clearForm();
    }

    const addIcecreamToList = (newIcecream)=>{
        // setIcecreamList([...icecreamList, newIcecream])
        setIcecreamList((prevState)=>[...prevState, newIcecream]);
    }


    const clearForm = () => {
        setFlavor("Vanilla");
        setQuantity(0);
    }

    return (
        <fieldset>
            <legend> OrderPage.jsx</legend>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Flavor: </label>
                <input 
                    type="text" 
                    name="flavor" 
                    value={flavor}
                    className='form-control'
                    onChange={(e)=>setFlavor(e.target.value)} />
            </div>
            <div>
                <label>Quantity : </label>
                <input type="number" name="quantity" value={quantity} onChange={e=>setQuantity(e.target.value)} className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Submit</button>
            </form>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th> Flavor</th>
                        <th> Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        icecreamList.map((eachIcecream, idx)=>{
                            return <tr key={idx}>
                                <td>{eachIcecream.flavor}</td>
                                <td>{eachIcecream.quantity}</td>
                            </tr>

                        })
                    }
                </tbody>
            </table>


        </fieldset>
    )
}

export default OrderPage