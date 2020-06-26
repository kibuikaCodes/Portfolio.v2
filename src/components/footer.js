import React from 'react'
import styled from 'styled-components';
import {breakpoints} from '../Media';


const MainDiv = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 2em;

    @media (min-width: ${breakpoints.mobileMax}) {
        position: absolute;
        bottom: 0;
        margin-bottom: 1em;
    }
`;

const Line = styled.hr`
    width: 60vw;
`;

const FooterLinks = styled.div`
     display: flex;
     flex-flow: row;
     align-items: center;
     justify-content: center;
     padding-bottom: 3em;

     @media (max-width: ${breakpoints.mobileMax}) {
        padding-bottom: .3em;
    }
`;

const FooterItem = styled.a`
    text-decoration: none;
    color: white;
    margin-left: ${props => props.spaced ? '4em' : '0em'};
    font-size: 1.5em;
    font-weight: 700;

    : hover {
        border-bottom: 3px solid white;
    }

    @media (max-width: ${breakpoints.mobileMax}) {
        margin-left: ${props => props.spaced ? '1.5em' : '0em'};
    }
`;

function Footer() {
    return (
        <MainDiv>
            <Line />
            <FooterLinks>
                <FooterItem href='/home'>Home</FooterItem>
                <FooterItem href='/projects' spaced>Projects</FooterItem>
                <FooterItem href='/contact' spaced>Contact</FooterItem>
            </FooterLinks>
        </MainDiv>
    )
}

export default Footer
