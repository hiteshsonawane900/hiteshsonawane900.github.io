
import React from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
const Github = () => {
    return (
        <MainContainer style={{ marginTop: "-20px" }}>
            
            <h1 style={{ color: "#01a479", textTransform: "uppercase" }}>Days I Worked</h1>
            <Container className="react-activity-calendar">
                <GithubCalendar username='hiteshsonawane900' year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16} />
            </Container>
            <h1 style={{ color: "#01a479", textTransform: "uppercase" }}>My Statistics</h1>
            <img id="github-top-langs" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=hiteshsonawane900" alt="hiteshkss" />
            <div className='stats' >
                <img id="github-stats-card" align="center" src="https://github-readme-stats.vercel.app/api?username=hiteshsonawane900&show_icons=true&locale=en" alt="hiteshkss" />
                <img  id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=hiteshsonawane900&" alt="hiteshkss" />
            </div>
        </MainContainer>
    )
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    border: 10px solid #01a479;
    border-radius:50px 5px 50px 5px;
    padding:30px 10px 30px 10px;
`

const MainContainer = styled.div`
    .stats{
        width:80%;
        margin:auto;
        display:flex;
        justify-content:center;
        border-radius:50px;
        margin-bottom:50px;
    }

    .stats>img{
        padding:20px 10px 20px 10px;
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .stats{
            flex-direction:column; 
        }

    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        
        .stats{
            flex-direction:column; 
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

    @media only screen and (max-width: 319px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

`

export default Github