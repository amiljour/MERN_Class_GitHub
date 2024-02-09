import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormPage1 from './views/FormPage1'
import FormPage2 from './views/FormPage2'
import FormPage3 from './views/FormPage3'
import OrderPage from './views/OrderPage'

function App() {

  return (
    <div className="container mt-5">
     {/* <FormPage1 /> */}
     {/* <FormPage2 />  */}
     {/* <FormPage3 /> */}
     <OrderPage />
    </div>
  )
}

export default App
