import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import AddTags from "./Components/AddTags/AddTags"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/addTags' element={<AddTags/>}/>
      </Routes>
    </>
  )
}

export default App
