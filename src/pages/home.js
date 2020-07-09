import React from 'react'
import styled from 'styled-components';
import Typer from '../components/typingEffect';
import Footer from '../components/footer';
import {breakpoints} from '../Media';
import SideBar from '../components/sidebar';

// import images;
import MainImage from '../images/abstract-painting.jpg';
import Github from '../images/github1.png';
import Twitter from '../images/twitter1.png';

const MainDiv = styled.div`
    height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) ), url(${MainImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media (max-width: ${breakpoints.mobileMax}) {
        height: 100vh;
        width: 100vw;
    }
    
    
`;

const ContentDiv = styled.div`
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 80vw;
    color: white;
    margin-top: 3em;

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-top: 8em;
    }

    
`;

const DevDescription = styled.p`
    margin-top: 1.5em;
    font-size: 1.7em;
    font-weight: 200;
    line-height: 1.5;
    text-align: center;

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-top: 1em;
        font-size: 1.3em;
    }
    

`;

const DevSkills = styled.p`
    margin-top: 1.5em;
    font-size: 1.5em;
    font-weight: 200;
    line-height: 1.5;
    text-align: center;

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-top: .5em;
        font-size: 1.1em;
    }

    
`;

const FooterDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.mobileMax}) {
        display: none;
    }
`;

const SideBarDiv = styled.div`
    display: none;

    @media (max-width: ${breakpoints.mobileMax}) {
        display: block;
        width: 100vw;
    }
`;

const IconDiv = styled.div`
    right: 0px;
    bottom: 7px;
    height: auto;
    width: auto;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding-left: 2em;

    @media (max-width: ${breakpoints.mobileMax}) {
        height: auto;
        width: 50%;
        bottom: 0px;
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-top: 1.5em;
    }
`;

const Icon = styled.img`
    height: 3em;
    width: 3em;
    margin-top: ${props => props.top ? '2em' : '0em'};
    color: white;

    @media (max-width: ${breakpoints.mobileMax}) {
        height: 2em;
        width: 2em;
        margin-top: ${props => props.top ? '0em' : '0em'};
    }
`;


function Home() {
    return (
        <MainDiv>
            <SideBarDiv>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </SideBarDiv>
            <ContentDiv>
                <Typer />
                <DevDescription style={{color: 'white'}}>I'm <em>Steve Kibuika</em> and I make things for the web. I work with people like you to build you a space on the interwebs. Through creative &amp; design thinking, I build classical websites that suit your needs and desires.</DevDescription>
                <DevSkills>I am proficient in Web design | HTML | CSS | Javascript | React | Styled-Components | NodeJs</DevSkills>
                <IconDiv>
                    <a href='https://github.com/kibuikaCodes' target='_blank' rel="noopener noreferrer"><Icon src={Github} alt=''></Icon></a>
                    <a href='https://twitter.com/home' target='_blank' rel="noopener noreferrer"><Icon src={Twitter} alt='' top></Icon></a>
                </IconDiv>
            </ContentDiv> 
            <FooterDiv>
                <Footer />
            </FooterDiv>
        </MainDiv>
    )
}

export default Home
