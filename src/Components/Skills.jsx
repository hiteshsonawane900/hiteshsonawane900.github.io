import React from 'react'
import styled from 'styled-components'
import html from '../image/HTML.png'
import css from '../image/CSS.png'
import js from '../image/JS.png'
import git from '../image/Git.png'
import nodejs from '../image/Nodejs.png'
import react from '../image/ReactJs.png'
import reactredux from '../image/Redux.png'
const Skills = () => {
    const skills = [
        {
            img:html,
            title:'HTML'
        },
        {
            img:css,
            title:'CSS'
        },
        {
            img:js,
            title:'Javascript'
        },
        {
            img:git,
            title:'Git/Github'
        },
        {
            img:nodejs,
            title:'NodeJS'
        },
        {
            img:react,
            title:'ReactJS'
        },
        {
            img:reactredux,
            title:'Redux'
        }
    ]

  return (
    <Container id='skills' >
        <h1>Skills</h1>
        <div className='skillsContainer'>
            {skills.map((ele,index)=>(
                <div key={index} className="skills-card">
                    <img className="skills-card-img" src={ele.img} alt={ele.title} width='70px' height='70px'/>
                    <p className="skills-card-name" >{ele.title}</p>
                </div>
            ))}
        </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }
   
`

export default Skills