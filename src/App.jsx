import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Driverspage from './Driverspage'
import '../public/styles.css'
import Driversinfo from './Driverinfo'

function App() {

const menu_btn =document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  const handleClick = () => {
    menu_btn.classList.toggle("is-active")
    mobile_menu.classList.toggle("is-active")
  }
  // const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar/>
    <Driverspage
      theClick={handleClick}
    />
    <Driversinfo/>
    </>
  )
}

export default App
