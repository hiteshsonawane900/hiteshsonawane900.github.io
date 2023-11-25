import React from 'react';
import styled from 'styled-components';
import PharmEasy from '../image/Pharmeasy.png';
import Alckazar from '../image/Alckazar.png';
import cycle from '../image/cycle.png';
import Ramicone from '../image/Ramicone.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'PharmEasy Website',
            img: PharmEasy,
            desc: 'PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.',
            worked: 'This is a group project which is created by group of 4 members in 1 week.',
            githubLink: 'https://github.com/kuntalkumar/Unit_4_Project_Pharmeasy',
            deployedLink: 'https://6466188149da42083e1781f6--cerulean-basbousa-d1f219.netlify.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        }, {
            id: 2,
            title: 'Travel Agency',
            img: Alckazar,
            desc: 'Trusted by 80 million Travelers. Aalcazar is the worlds most comprehensive travel, flight and accommodation provider. very easy to access on your smarttree and desktop.',
            worked: 'This is a group project which is created by group of 4 members in 1 week.',
            githubLink: 'https://github.com/Dibakardebnath/Alcazar-project',
            deployedLink: 'https://alcazar-project.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 3,
            title: 'Specialized Cycle App',
            img: cycle,
            desc: 'The Specialized Cycle Shop app is a dedicated application designed to enhance the cycling experience for enthusiasts and riders who prefer Specialized bikes and equipment. This app provides a user-friendly platform that allows customers to explore and purchase a wide range of Specialized products, including bicycles, accessories, and apparel.',
            worked: 'This is a group project which is created by group of 4 members in 1 week.',
            githubLink: 'https://github.com/Imesunny/Collab_ReactProject',
            deployedLink: 'https://cycleshop-clone-2oox0gnw2-imesunny.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        },
        {
            id: 4,
            title: 'Ramicone Engineers India Website',
            img: Ramicone,
            desc: 'The one stop solution for all industrial consumables and fire fighting accessories.',
            worked: 'Solo project.',
            githubLink: 'https://github.com/hiteshsonawane900/ramicone',
            deployedLink: 'https://ramiconeengineers-5orpfl2cm-hiteshsonawane900.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript']
        } 
        
    ]

    return (
        <Container id='projects' className="project-card" >
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1 className="project-title">{ele.title}</h1>
                            <p className="project-description">{ele.desc}</p>
                            {/* <p style={{ fontWeight: 'bold' }}>{ele.worked}</p> */}
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span className="project-tech-stack"key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                {ele.githubLink && <a href={ele.githubLink} target='_blank' rel='noreferrer' className="project-github-link"><button ><GitHubIcon />Github</button></a>}
                                <a href={ele.deployedLink} target='_blank' rel='noreferrer' className="project-deployed-link" ><button ><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    h1{
        color:#01a479;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid #e9e9e9;
        border-radius: 20px;
        overflow:hidden;
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
    }

    .imgBox>img:hover{
        position:absolute;
        width:80%;
        transform: scale(1.3);
        transform-origin: 0% 0%;
    }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#343a40;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#01a479;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:#44a4be;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects