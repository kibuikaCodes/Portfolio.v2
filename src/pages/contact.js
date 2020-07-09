import React from 'react'
import styled from 'styled-components';
import { breakpoints } from '../Media';
import MainImage from '../images/colored.jpg';
import Footer from '../components/footer';
import SideBar from '../components/sidebar';

import Github from '../images/github1.png';
import Twitter from '../images/twitter1.png';


const MainDiv = styled.div`
    height: 100vh;
    background: linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) ), url(${MainImage}) no-repeat center center fixed;
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

const ContactTitle = styled.h1`
    font-size: 4em;
    color: white;
    font-weight: 800;
    margin-top: 1.5em;

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 2.5em;
        font-weight: 800;
        margin-top: 3em;
    }
`;

const ContactTagline = styled.p`
    font-size: 1.5em;
    color: white;
    text-align: center;
    width: 50%;

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 1.2em;
        width: 80%;
    }
`;

// const ContactsDiv = styled.div`
//     display: flex;
//     flex-flow: column nowrap:
//     align-items: center;
// `;

const Email = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.5em;
    border-bottom: 2px solid white;


    :hover {
        border-bottom: none;
    }

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 1.2em;
        margin-top: 2em;
    }
`;

const Phone = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.5em;
    border-bottom: 2px solid white;

    :hover {
        border-bottom: none;
    }

    @media (max-width: ${breakpoints.mobileMax}) {
        font-size: 1.2em;
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
        margin-top: 3em;
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


function Contact() {
    return (
        <MainDiv>
            <SideBarDiv>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            </SideBarDiv>
            <ContactTitle>
                Contact Me.
            </ContactTitle>
            <ContactTagline>
                Feel free to reach out if you're looking for a developer, have a question or just want to connect.
            </ContactTagline>
            {/* <ContactsDiv> */}
                <Email href="mailto:kibuikacodes@gmail.com">kibuikacodes@gmail.com</Email>
                <br />
                <Phone href="tel:+254740459940">+254 740 459 940</Phone>
            {/* </ContactsDiv> */}
                <IconDiv>
                    <a href='https://github.com/kibuikaCodes' target='_blank' rel="noopener noreferrer"><Icon src={Github} alt=''></Icon></a>
                    <a href='https://twitter.com/home' target='_blank' rel="noopener noreferrer"><Icon src={Twitter} alt='' top></Icon></a>
                </IconDiv>
            <FooterDiv>
                <Footer />
            </FooterDiv>
            
        </MainDiv>
    )
}

export default Contact
