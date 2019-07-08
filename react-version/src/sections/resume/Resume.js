import { Section } from '../../components/Section'
import { Jobs } from './Jobs'
import { Schools } from './Schools'
import { Lanugages } from './Languages'
import { Skills } from './Skills'
import { Clubs } from './Clubs'
import { Awards } from './Awards'
import React from 'react'

import pdf from '../../assets/pdfs/resume.pdf'

const PdfVersion = () => <a className="my-button" href={pdf} rel="noopener noreferrer" target="_blank">
  PDF Version
</a>

export const Resume = () =>
  <Section title={'Rèsumè'} color={'#C5BBDA'} id={'resume'} button={<PdfVersion/>}>
    <Jobs/>
    <Schools/>
    <Lanugages/>
    <Skills/>
    <Clubs/>
    <Awards/>
  </Section>
