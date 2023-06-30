// import React from 'react'
// import {Link} from "react-router-dom"

// const Navbar = () => {

//   const links = [
//     {path:'/',title:"Home",class:"nav-link home"},
//     {path:'/about',title:"About",class:"nav-link about"},
//     {path:'/contact',title:"Contact",class:"nav-contact"},
//     {path:'/projects',title:"Projects",class:"nav-link projects"},
//     {path:'/skills',title:"Skills",class:"nav-link skills"},
//     {path:'/resume',title:"Resume",class:"nav-link resume"},
// ]
//   return (
//     <div id="nav-menu">
//           {
//                 links.map((elem)=>{
//                     return <Link key={elem.path}  to={elem.path} >{elem.title}</Link>
//                 })
//             }
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Github from '../Components/Github'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Homepage = () => {
    return (
        <div id="home">
        <>
            <Navbar />
            <About />
            <Skills/>
            <Projects/>
            <Github/>
            <ContactUs/>
        </>
        </div>
    )
}

export default Homepage