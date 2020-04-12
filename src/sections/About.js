import React from 'react'

import me from '../assets/images/devon.jpg'

import styled from 'styled-components'
import { Section } from '../components/Section'

const AboutSection = styled.div`
  @media (max-width: 1000px){
    display: flex;
    flex-wrap: wrap;
  }
`

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
`

const TextSection = styled.p`
  max-width: 100rem;
`

export const About = () =>
  <Section title={'About Me'}
           color={'#f0f0f0'}
           dividerColor={"#222"}
           id={'about'}>
    <AboutSection>
      <PicOfMe src={me}
               align={'right'}/>
      <TextSection>
        I’m an agile Software Engineer. I’m an advocate for XP because of its focus on collaboration and focus on
        driving agility by creating short feedback loops. I've found that focusing technical efforts on Test Driven
        Development,
        Clean Code, Refactoring, and CI/CD allow me to write code and deliver software not only quickly, but continue to
        do so for a long time.
      </TextSection>
      <TextSection>
        I don't like to pin myself to a particular language or technology. A big part of why I love consulting is that
        I've had the opportunity to explore different industries, languages, patterns, architectures, and tools in depth
        with amazing teams. Right now my preferred language is Kotlin. If I'm building a web application I'll reach for
        Spring. On the frontend React is my go-to using Typescript. I prefer statically typed languages. I have a lot of
        experience writing OO software. I'm excited about functional programming, actively learning more FP concepts,
        and would like to learn a purely functional language like Haskell or Clojure.
      </TextSection>
      <TextSection>
        Thinking about architecture and design is important to me. I love iterating on the structure of a
        codebase to make it easier to maintain and more reflective of the Domain that it's written for. Thoughtful
        design, clean code, relentless refactoring, and an amazing test bed makes this easy.
      </TextSection>
      <TextSection>
        Outside of building software, I like getting outdoors to ski, hike, golf, bike, and kayak. I miss Colorado and
        all of the outdoorsy activities it has to offer. I've been getting really into cooking. I'm trying to watch more
        movies, especially "I can't believe you haven't seen that" kind.
      </TextSection>
    </AboutSection>
  </Section>
