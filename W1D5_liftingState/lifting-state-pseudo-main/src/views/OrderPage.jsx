import React, { useState } from 'react'
import IcecreamForm from '../components/orderpage/IcecreamForm'
import IcecreamTable from '../components/orderpage/IcecreamTable'


const OrderPage = () => {
    // Create state variable to keep track of list (so that child could also update this list)

    // Create a function to push new item into the list
 
    // Create a function to remove an item from the list using array Idx
    
    
    return (
        <fieldset>
            <legend> OrderPage.jsx</legend>
            {/* Form: it requires pushing new item to the list, send that fx as a props */}
            <IcecreamForm /> 

            {/* Table: it requires the list & the ability to remove item using idx. pass the list & the function */}
            <IcecreamTable />

        </fieldset>
    )
}

export default OrderPage