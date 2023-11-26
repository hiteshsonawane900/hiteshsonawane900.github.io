import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react'
import styled from 'styled-components'
import myImage from '../image/image.jpg'
import backgroundImage from '../image/background.jpg';
import signature from '../image/signature.png';
// import Resume from '../image/HiteshResume.pdf'
const About = () => {
    return (
        <div>
            <Container>
                <div className='aboutBox'>
                    <div className='about_leftBox'>
                        <h1 id="user-detail-name">Hi, I'm Hitesh Sonawane.</h1>
                        <p>Passionate Full Stack Web Developer with certification in backend and frontend in the MERN stack. Seeking to contribute my skills and expertise in the company growth. Ability to work in team environment, emphasizing team goals.</p>
                        <div className='resumesButton'>
                            <a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=1AwEI2oOeq8mesWaKipmfbJwg7BMtrAj0">
                                <button  id="resume-button-2">Download Resume<DownloadIcon /></button>
                            </a>
                            <a href="https://drive.google.com/file/d/1AwEI2oOeq8mesWaKipmfbJwg7BMtrAj0/view?usp=drivesdk">
                                <button>View Resume<VisibilityIcon /></button>
                            </a>
                        </div>

                    </div>
                    <div className='about_rightBox'>
                        <div>
                            <img className="home-img" src={myImage} alt="profile-pic" width='100%' />
                        </div>
                    </div>
                </div>
            </Container>
            <AboutMeWrapper>
                <div className='aboutSection'>
                    <div className='left'>
                        <h3>About Me</h3>
                        <p></p>
                        <p>Email: <span>hiteshsonawane900@gmail.com</span></p>
                        <p>Language: <span>English</span></p>
                        <p>Nationality: <span>Indian</span></p>
                    </div>
                    <div   id="about" className='about section'>
                        <h2>I am <span>Full Stack Web Developer</span></h2>
                        <p id="user-detail-intro" >My name is Hitesh Sonawane, I am from Kalyan, Maharashtra. Passionate Full Stack Web Developer
                            with skills in the MERN stack, I have
                            learned Full Stack Web Development
                            in Masai school. Skilled in problem-
                            solving and execution of software
                            tasks from start to finish. I look
                            forward to joining a company where
                            I can contribute to individual and
                            company growth..</p>
                        <div>
                            <img src={signature} alt='hitesh_Signature' width='200px' />
                        </div>
                    </div>
                </div>
            </AboutMeWrapper>
        </div>


    )
}

const Container = styled.div`
    width:100%;
    min-height:450px;
    padding-top:20px;
    background-image: url(${backgroundImage});

    .resumesButton{
        width:100%;
        display:flex;
        gap:20px;
    }

    .resumesButton a button{
        font-size: small;
        height:40px;
        cursor:pointer;
    }

    .resumesButton a button svg{
        font-size: 17px;
    }
    
    a{
        text-decoration:none;
    }
    .aboutBox{
        width:80%;
        height:100%;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .about_leftBox{
        width:50%;
        text-align:left;
        padding:10px;
    }

    .about_leftBox>h1{
        font-size:30px;
        line-height:10px;
    }

    .about_leftBox>p{
        color:#8492a6;
        font-size:17px;
        font-weight:500;
    }
    
    .about_leftBox button{
        padding:8px 12px 8px 12px;
        border-radius:10px;
        border:1px solid #01a479;
        background:#01a479;
        color:white;
        display:flex;
        align-items:center;
        gap:5px;
        font-weight:bold;
        font-size:15px;
    }

    .about_leftBox button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .about_rightBox{
        width:50%;
        height:80%;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:15px;
    }

    .about_rightBox>div{
        width:250px;
        height:250px;
        margin:auto;
        border-radius:100%;
        background-color:white;
        overflow:hidden;
    }
    

    

    @media only screen and (min-width: 481px) and (max-width:768px){
        min-height:450px;
        padding-top:20px;

        .resumesButton{
            flex-direction:column;
            align-items:center;
        }

        .resumesButton> a:last-child button{
            width:165px;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            gap:0px;
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:60%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
            margin:auto;
            border-radius:100%;
            background-color:white;
            overflow:hidden;
        }

        .resumesButton{
            flex-direction:column;
            align-items:center;
        }

    }

    @media only screen and (min-width:320px) and (max-width:480px){
        min-height:450px;
        padding-top:20px;

        .resumesButton{
            flex-direction:column;
            align-items:center;
        }

        .resumesButton> a:last-child button{
            width:165px;
            display:flex;
            align-items:center;
            justify-content:center;
        }

        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
            
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:17px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:200px;
            height:200px;
        }

    }

    @media only screen and (max-width: 320px){
        min-height:450px;
        padding-top:20px;
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:x-large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
        }

    }


    @media only screen and (max-width: 319px){
        min-height:450px;
        padding-top:20px;

        .resumesButton{
            flex-direction:column;
            align-items:center;
        }

        .resumesButton> a:last-child button{
            width:165px;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .aboutBox{
            height:100%;
            flex-direction:column-reverse;
        }

        .about_leftBox>h1{
            font-size:large;
            line-height:0px;
            text-align:center;
        }

        .about_leftBox>p{
            color:#8492a6;
            font-size:15px;
            font-weight:500;
        }

        .about_leftBox{
            width:100%;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .about_rightBox{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:15px;
        }
    
        .about_rightBox>div{
            width:150px;
            height:150px;
        }

    }
`
const AboutMeWrapper = styled.div`
    width:100%;
    margin-top:-50px;
    margin-bottom:40px;
    .aboutSection{
        width:80%;
        margin:auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        background-color:white;
        display:flex;
        justify-content:center;
        padding:20px;
        border-radius:10px;
        gap:10px;
    }
    .left{
        width:30%;
        text-align:left;
        background-color:#f8f9fa;
        padding:5px 15px 5px 15px;;
        border-radius:10px;
    }

    .left>p{
        font-size:small;
        font-weight:bold;
    }

    .left>p>span{
        color:#707070 ;
    }

    .left>h3+p{
        margin-top:0px;
        border-top:1.5px dashed #d4dae1
    }

    .right{
        width:70%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        padding:0px 10px 0px 10px;
    }

    .right>h2{
        width:100%;
        margin-bottom:0px;
        font-size:20px;
        text-align:left;
    }
    .right>h2>span{
        color:#01a479;
        
    }

    .right>p{
        text-align:left;
        margin-top:5px;
    }

    .right>div{
        display:flex;
        align-items:flex-start;
        overflow:hidden;
        margin-top:-10px;
    }

    .right>div>img{
        margin-left:-35px;
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .left{
            width:35%;
        }

    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }
        .right>p{
            font-size:14px;
        }

    }

    @media only screen and (min-width:320px) and (max-width:480px){
 
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }

        .right>h2{
            font-size:17px;
        }

        .right>p{
            font-size:15px;
        }
    }

    @media only screen and (max-width: 320px){
        margin-top:20px;
        .aboutSection{
            flex-direction:column;
            align-items:center;
        }

        .left{
            width:90%;
        }
        .right{
            width:90%;
        }
        .right>h2{
            font-size:16px;
        }

        .right>p{
            font-size:13px;
        }

    }
    
`
export default About