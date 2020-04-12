import React from 'react'
import { SubSection, SubSectionRow } from '../../components/SubSection'
import { languages } from '../../data/technicalSkills'
import styled from 'styled-components'

const SkillsetLanguages = styled.h3`
  margin: 0;
  font-weight: lighter;
`
export const Languages = () =>
  <SubSection color={"#FFF"} title={'PROGRAMMING LANGUAGES'}>
    {languages.map(it => <SkillsetRow skillset={it}/>)}
  </SubSection>

const SkillsetRow = ({ skillset }) =>
  <SubSectionRow name={skillset.description}>
    <SkillsetLanguages>
      {skillset.languages.join(', ')}
    </SkillsetLanguages>
    <p>
      {skillset.libraries.join(', ')}
    </p>
  </SubSectionRow>
