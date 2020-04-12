import { Section } from '../../components/Section'
import { Jobs } from './Jobs'
import { Schools } from './Schools'
import { Languages } from './Languages'
import { Skills } from './Skills'
import { Clubs } from './Clubs'
import { Awards } from './Awards'
import { Certifications } from './Certifications'
import React from 'react'

import pdf from '../../assets/pdfs/resume.pdf'
import { MyButton } from '../../components/MyButton'

const PdfVersion = () => <MyButton className="my-button"
                                   href={pdf}
                                   rel="noopener noreferrer"
                                   target="_blank">
  PDF Version
</MyButton>

export const Resume = () =>
  <Section title={'Rèsumè'}
           hideDivider
           color={'#C5BBDA'}
           dividerColor={"#FFF"}
           id={'resume'}
           button={<PdfVersion/>}>
    <Jobs/>
    <Certifications/>
    <Schools/>
    <Languages/>
    <Skills/>
    <Clubs/>
    <Awards/>
  </Section>
