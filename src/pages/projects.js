import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../Media';
import MainImage from '../images/abstract.jpg';
import Footer from '../components/footer';
import EstatemobiImage from '../images/screenshots/estatemobi.JPG';
import KejaTest from '../images/screenshots/Kejatest.JPG';
import FarmPlus from '../images/screenshots/farm.JPG';
import TUKDATA from '../images/screenshots/tukdata.JPG';
import Keja from '../images/screenshots/keja.JPG';
import Tusome from '../images/screenshots/tusome.JPG';
import SideBar from '../components/sidebar';


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
        height: auto;
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
    margin-top: .5em;
    margin-bottom: 8em;
    width: 90vw;
    display: flex;
    flex-flow: column;

    @media (max-width: ${breakpoints.mobileMin}) {
        width: 100vw;
        margin-top: 3em;
        margin-bottom: 5em;
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
        margin-top: -1.5em;
    }

`;

const ProjectCard = styled.div`
    height: 22em;
    width: 28em;
    margin-left: ${props => props.left ? '4em' : '0em'};
    margin-top: ${props => props.top ? '2em' : '0em'};
    padding: .5em;

    :hover {
        border: 1px solid white;
    }

    @media (max-width: ${breakpoints.mobileMin}) {
        height: 18em;
        width: 20em;
        margin-left: ${props => props.left ? '0em' : '0em'};
        margin-top: ${props => props.top ? '0em' : '0em'};
    }
`;

const ProjectImageDiv = styled.div`
    height: 15em;
    width: 28em;
    border-radius: 20px;
    

    @media (max-width: ${breakpoints.mobileMin}) {
        height: 14em;
        width: 20em;
        
        
    }
`;

const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    
`;

const ProjectTextDiv = styled.div`
    height: 8em;
    width: 28em;
    display: flex;
    flex-flow: column nowrap;


    @media (max-width: ${breakpoints.mobileMin}) {
        height: 5em;
        width: 20em;
        margin-top: -1em;
        
        
    }

`;

const ProjectName = styled.p`
    font-size: 1.7em;
    font-family: sans-serif;
    font-weight: 500;
    margin-top: .4em;
    color: white;

    @media (max-width: ${breakpoints.mobileMin}) {
        font-size: 1.5em;
        
        
    }
`;

const ProjectLink = styled.a`
    text-decoration: underline;
    color: white;
    font-size: 1em;
    font-weight: 600;
    margin-top: -.4em;

    :hover {
        text-decoration: none;
    }

    
    
`;

const FooterDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.mobileMin}) {
        display: none;
    }
`;

const SideBarDiv = styled.div`
    display: none;

    @media (max-width: ${breakpoints.mobileMin}) {
        display: block;
        width: 100vw;
    }
`

function Projects() {
    return (
        <MainDiv>
            <SideBarDiv>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </SideBarDiv>
            <ProjectsDiv>
                <ProjectsTitle>Projects I've worked on.</ProjectsTitle>
                <ProjectCardsDiv>
                    <ProjectCard>
                        <ProjectImageDiv>
                            <ProjectImage src={EstatemobiImage} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>EstateMobi Website</ProjectName>
                            <ProjectLink href='https://estatemobi.netlify.app/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard left>
                        <ProjectImageDiv>
                            <ProjectImage src={KejaTest} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>Keja API Test Website</ProjectName>
                            <ProjectLink href='https://kejafrica.com/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard top>
                        <ProjectImageDiv>
                            <ProjectImage src={FarmPlus} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>Farm+ Website</ProjectName>
                            <ProjectLink href='https://farmplus.netlify.app/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard top left>
                        <ProjectImageDiv>
                            <ProjectImage src={TUKDATA} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>TU-K Data Project (Website + API)</ProjectName>
                            <ProjectLink href='https://tukdataweb.netlify.app/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard top>
                        <ProjectImageDiv>
                            <ProjectImage src={Keja} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>Keja.Africa</ProjectName>
                            <ProjectLink href='https://keja.africa/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                    <ProjectCard top left>
                    <ProjectImageDiv>
                            <ProjectImage src={Tusome} alt=''></ProjectImage>
                        </ProjectImageDiv>
                        <ProjectTextDiv>
                            <ProjectName>Tusome Website</ProjectName>
                            <ProjectLink href='https://tusome.netlify.app/' target='_blank'>View project &#62;</ProjectLink>
                        </ProjectTextDiv>
                    </ProjectCard>
                </ProjectCardsDiv>
            </ProjectsDiv>
                <FooterDiv>
                    <Footer />
                </FooterDiv>
        </MainDiv>
    )
}

export default Projects
