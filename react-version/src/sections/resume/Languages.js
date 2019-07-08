import { languages } from '../../data'
import React from 'react'
import { Frameworks } from './Frameworks'
import { SubSection, SubSectionRow } from '../../components/SubSection'
import styled from 'styled-components'

const CompetencyHeader = styled.p`
  width: 10rem;
  text-align: center;
`

const CompetencyContainer = styled.div`
  display: flex;
`

const Competent = styled.div`
  width: 10rem;
  border: 0;
  height: 1.5rem;

`

const CompetentFull = styled(Competent)`
  background-color: #002673;
`

const CompetentEmpty = styled(Competent)`
`

export const Copmetency = ({ star }) =>
  <CompetencyContainer>
    {new Array(3).fill(0)
      .map((ignored, index) => {
        return star > index ? <CompetentFull className={'FULL'}/> : <CompetentEmpty className={'EMPTY'}/>
      })}
  </CompetencyContainer>

const Language = ({ language }) =>
  <>
    <SubSectionRow name={language.name}>
      <Copmetency star={language.proficiency}/>
    </SubSectionRow>
    {language.frameworks && <Frameworks frameworks={language.frameworks}/>}
  </>

export const Lanugages = () =>
  <SubSection title={'PROGRAMMING LANGUAGES'}>
    <SubSectionRow>
      <CompetencyContainer>
        <CompetencyHeader>I've Used It</CompetencyHeader>
        <CompetencyHeader>Working Knowledge</CompetencyHeader>
        <CompetencyHeader>I'm Good at it</CompetencyHeader>
      </CompetencyContainer>
    </SubSectionRow>
    {languages.map(language => <Language key={language.name} language={language}/>)}
  </SubSection>