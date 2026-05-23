import React from 'react'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import { Routes, Route } from 'react-router-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'

import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />

        <Route path='/Product' element={<Product />} />
        <Route path='/Product/men' element={<Men />} />
        <Route path='/Product/women' element={<Women />} />
        <Route path='/Product/Kids' element={<Kids />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
