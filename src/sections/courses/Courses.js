import { Classes } from './Classes'
import { cs, econ, technical } from '../../data/courses'
import React from 'react'
import { Section } from '../../components/Section'
import { SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'

export const Courses = () =>
  <Section title={'Courses'}
           lightBackground={true}
           id={'courses'}
           dividerColor={'#870202'}>
    <SubSection title={'COMPUTER SCIENCE'}
                color={'#870202'}>
      <Classes classes={cs}/>
    </SubSection>
    <SubSection title={'ECONOMICS'}
                color={'#870202'}>
      <Classes classes={econ}/>
    </SubSection>
    <SubSection title={'ENGINEERING & ELECTIVES'}
                color={'#870202'}>
      <Classes classes={technical}/>
    </SubSection>
    <SubSectionRow name={'**'}
                   lightBackground={true}>
      <SubSectionText>
        Taken at the University of Edinburgh in the fall of 2015
      </SubSectionText>
    </SubSectionRow>
  </Section>
