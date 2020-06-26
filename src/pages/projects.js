import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../Media';
import MainImage from '../images/abstract.jpg';
import Footer from '../components/footer';


const MainDiv = styled.div`
    height: 230vh;
    background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) ), url(${MainImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    display: flex;
    flex-flow: column nowrap:
    align-items: center;
    justify-content: center;


    @media (max-width: ${breakpoints.mobileMin}) {
        height: 295vh;
        width: 100vw;
    }
    
    
`;

const ProjectsTitle = styled.h1`
    float: left;
    font-size: 2.5em;
    font-weight: 800;
    color: white;
    margin-left: 3.2em;

    @media (max-width: ${breakpoints.mobileMin}) {
        margin-left: 1em;
    }
`;

const ProjectsDiv = styled.div`
    margin-top: 2em;
    margin-bottom: 8em;
    width: 90vw;
    display: flex;
    flex-flow: column;

    @media (max-width: ${breakpoints.mobileMin}) {
        width: 100vw;
        margin-top: 1em;
        margin-bottom: 3em;
    }

`;

const ProjectCardsDiv = styled.div`
    margin: 1em;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.mobileMin}) {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }

`;

const ProjectCard = styled.div`
    height: 20em;
    width: 28em;
    background-color: white;
    margin-left: ${props => props.left ? '4em' : '0em'};
    margin-top: ${props => props.top ? '2em' : '0em'};

    :hover {
        border: 2px solid white;
    }

    @media (max-width: ${breakpoints.mobileMin}) {
        height: 18em;
        width: 20em;
        margin-left: 0em;
        margin-top: 1em;
    }
`;

const ProjectImageDiv = styled.div`
    background-color: black;
    height: 15em;
    width: 28em;

    @media (max-width: ${breakpoints.mobileMin}) {
        height: 14em;
        width: 20em;
        
        
    }
`;

const ProjectTextDiv = styled.div`
    height: 6em;
    width: 28em;

    @media (max-width: ${breakpoints.mobileMin}) {
        height: 5em;
        width: 20em;
        
        
    }

`;


function Projects() {
    return (
        <MainDiv>
            
            <ProjectsDiv>
                <ProjectsTitle>Projects I've worked on.</ProjectsTitle>
                <ProjectCardsDiv>
                    <ProjectCard>
                        <ProjectImageDiv></ProjectImageDiv>
                        <ProjectTextDiv>kjedfio</ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard left>
                        <ProjectImageDiv></ProjectImageDiv>
                        <ProjectTextDiv>jdf</ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard top>
                        <ProjectImageDiv></ProjectImageDiv>
                    </ProjectCard>
                    <ProjectCard top left>
                        <ProjectImageDiv></ProjectImageDiv>
                    </ProjectCard>
                    <ProjectCard top>
                        <ProjectImageDiv></ProjectImageDiv>
                    </ProjectCard>
                    <ProjectCard top left>
                        <ProjectImageDiv></ProjectImageDiv>
                    </ProjectCard>
                </ProjectCardsDiv>
            </ProjectsDiv>
            <Footer />
            
        </MainDiv>
    )
}

export default Projects
