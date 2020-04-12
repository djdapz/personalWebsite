import { EmailForm } from './EmailForm'
import React from 'react'
import styled from 'styled-components'

import { Section } from '../../components/Section'
import { Divider } from '../../components/SubSection'

import linkedIn from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import { SectionDivider } from '../../components/Divider'

const IconRow = styled.div`
  display: flex;
  justify-content: center;
`

const IconImage = styled.img`
  height: 4rem;
  margin: 0 3rem;
`

const Icon = ({ src, alt, href }) => <a rel="noopener noreferrer" target="_blank" href={href} className="icon-link">
  <IconImage src={src} alt={alt}/>
</a>

export const Contact = () =>
  <Section title={'Contact Me'} dividerColor={"#FFF"} color={'#C5BBDA'} id={'contact'}>
    <EmailForm/>
    <SectionDivider color={'#FFF'}/>
    <IconRow>
      <Icon src={linkedIn} alt={'Linked in'} href="https://www.linkedin.com/in/devon-d-apuzzo-91a08653"/>
      <Icon src={github} alt={'Git Hub'} href="https://github.com/djdapz"/>
    </IconRow>
  </Section>
