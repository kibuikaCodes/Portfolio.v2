import React from 'react'
import styled from 'styled-components';

const MainDiv = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 2em;
`;

const Line = styled.hr`
    width: 60vw;
`;

const FooterLinks = styled.div`
     display: flex;
     flex-flow: row;
     align-items: center;
     justify-content: center;
`;

const FooterItem = styled.a`
    text-decoration: none;
    color: white;
    margin-left: ${props => props.spaced ? '4em' : '0em'};
    font-size: 2em;
    font-weight: 700;
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
