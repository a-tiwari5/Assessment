import React from 'react'
import AllData from './AllData'
import {Routes, Route} from "react-router-dom"
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<AllData/>}></Route>
   </Routes>
  )
}

export default AllRoutes