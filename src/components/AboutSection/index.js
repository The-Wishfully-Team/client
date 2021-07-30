import React from 'react'
// import Particle from '../Particle'
import { AboutContainer, AboutContent, AboutHeading, AboutHeading2, AboutText, AboutBtnWrapper, Wrapper,BtnLink } from './AboutElements'



const AboutSection = () => {
    return (
        <>
        <AboutContainer>
            {/* <AboutParticleStyle>
                 <Particle />
             </AboutParticleStyle> */}
            <AboutContent id="about">
                <AboutHeading>Find presents for your kids with 3 easy steps:</AboutHeading>
                <Wrapper>
                    <AboutHeading2>1</AboutHeading2>
                </Wrapper>
                <AboutText>Create an account and save a child’s name or names of all children</AboutText>
                <Wrapper>
                    <AboutHeading2>2</AboutHeading2>
                </Wrapper>
                <AboutText>Let your child personalise own page and save a wish list</AboutText>
                <Wrapper>
                    <AboutHeading2>3</AboutHeading2>
                </Wrapper>
                <AboutText>Our app will find the closest matching present from the online shop - just save the shop link and price to your budget shopping list!</AboutText>
                <AboutBtnWrapper>
                    <BtnLink>Let's Go</BtnLink>
                </AboutBtnWrapper>
            </AboutContent> 

         </AboutContainer>

        </>
    )   
}


export default AboutSection;