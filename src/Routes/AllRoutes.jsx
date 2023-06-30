// import React from 'react'
// import {Routes,Route} from "react-router-dom"
// import Home from '../Pages/Home'
// import About from '../Pages/About'
// import Contact from '../Pages/Contact'
// import Skills from '../Pages/Skills'
// import Projects from '../Pages/Projects'
// import Resume from '../Pages/Resume'

// const Allroute = () => {
//   return (
//       <Routes>
//             <Route path="/" element={<Home/>} ></Route>
//             <Route path="/about" element={<About/>} ></Route>
//             <Route path="/contact" element={<Contact/>} ></Route>
//             <Route path="/projects" element={<Projects/>} ></Route>
//             <Route path="/skills" element={<Skills/>}></Route>
//             <Route path="/resume" element={<Resume/>}></Route>
//         </Routes>
//   )
// }

// export default Allroute
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
    </Routes>
  )
}

export default AllRoutes