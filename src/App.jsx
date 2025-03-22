import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Form from './Component/Form'
import Resume from './Pages/Resume'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
       <Route path='/Form' element={<Form />}/> 
       <Route path='/Resume' element={<Resume />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App