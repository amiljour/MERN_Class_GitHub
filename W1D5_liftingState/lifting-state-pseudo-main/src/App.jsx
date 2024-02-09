import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CallbackContainer from './views/CallbackContainer'
import OrderPage from './views/OrderPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CallbackContainer /> */}
      <OrderPage />
    </>
  )
}

export default App
