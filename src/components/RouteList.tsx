import React from 'react'
import { Route, Routes } from 'react-router-dom';
import TextUtility from './TextUtility'
import About from './About'

function RouteList() {
  return (
    <Routes>
      <Route path='/' element={<TextUtility heading='Enter text below to Analyze' rows={8} />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default RouteList;
