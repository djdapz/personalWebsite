import React from 'react'
import { SubSection, SubSectionRow, SubSectionText, } from '../../components/SubSection'
import { categorizedSkills } from '../../data/technicalSkills'

export const Skills = () => <SubSection title={'TECHNOLOGIES, SKILLS, PATTERNS, PRACTICES'}>
  {categorizedSkills.map(skill => <SubSectionRow key={skill.name}
                                                 name={skill.category}>
    <SubSectionText>
      {skill.content.map(it =>
        <p>
          {it}
        </p>)}
    </SubSectionText>
  </SubSectionRow>)}
</SubSection>