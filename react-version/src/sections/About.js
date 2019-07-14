import React from "react";

import me from "../assets/images/devon.jpg"

import styled from 'styled-components'
import {Section} from "../components/Section";

const AboutSection = styled.div`
  @media (max-width: 1000px){
    display: flex;
    flex-wrap: wrap;
  }
`;

const PicOfMe = styled.img`

  object-fit: scale-down;
 
  
   @media (min-width: 1000px) {
      padding: 0 3rem;
      float: left;  
      max-width: 40rem;
  }
  @media (max-width: 1000px){
      margin-right: auto;
      margin-left: auto;
      max-width: 100%;
  }
`;

const TextSection = styled.p`
  max-width: 100rem;
`;

export const About = () =>
    <Section title={"About Me"} color={"#f0f0f0"} id={"about"}>
        <AboutSection>
            <PicOfMe src={me} align={"right"}/>
            <TextSection>
                I’m an agile software engineer. I’m an advocate and practitioner of XP annd practice Test Driven
                Development, Pairing and CI/CD.
                I’m passionate about building things, solving problems, and learning new skills while mastering
                the
                skills I have.
            </TextSection>
            <TextSection>
                Most of my professional development experience has been with Java or Kotlin with Spring, JS or
                TypeScript with React,
                and a little bit of Python.

                I've worked with event driven microservies, contribution model orchestrations, single page web
                applications,
                for enterprises and the US Government.
            </TextSection>
        </AboutSection>
    </Section>;
