import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Form } from './Components/Form/Form';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add-city' element={<Form/>}></Route>
        <Route path='/add-country' element = {<Form/>}></Route>
      </Routes>
    </div>
  )
}

export default App
