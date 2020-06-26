import React from 'react'
import styled from 'styled-components';
import MainImage from '../images/abstract-painting.jpg';
import Typer from '../components/typingEffect';
import Footer from '../components/footer';
import {breakpoints} from '../Media';

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

    @media (max-width: ${breakpoints.mobileMin}) {
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
        margin-top: 2em;
    }

    
`;

const DevDescription = styled.p`
    margin-top: 1.5em;
    font-size: 1.7em;
    font-weight: 200;
    line-height: 1.5;
    text-align: center;

    @media (max-width: ${breakpoints.mobileMin}) {
        margin-top: 1em;
        font-size: 1.5em;
    }
    

`;

const DevSkills = styled.p`
    margin-top: 1.5em;
    font-size: 1.5em;
    font-weight: 200;
    line-height: 1.5;
    text-align: center;

    @media (max-width: ${breakpoints.mobileMin}) {
        margin-top: .5em;
        font-size: 1.3em;
    }

    
`;

const FooterDiv = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;


function Home() {
    return (
        <MainDiv>
            <ContentDiv>
                <Typer />
                <DevDescription style={{color: 'white'}}>I'm <em>Steve Kibuika</em> and I make things for the web. I work with people like you to build you a space on the interwebs. Through creative &amp; design thinking, I build classical websites that suit your needs and desires.</DevDescription>
                <DevSkills>I am proficient in Web design | HTML | CSS | Javascript | React | Styled-Components | NodeJs</DevSkills>
            </ContentDiv> 
            <FooterDiv>
                <Footer />
            </FooterDiv>
        </MainDiv>
    )
}

export default Home
