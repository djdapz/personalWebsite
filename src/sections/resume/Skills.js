import React from 'react'
import { RowWithGutter, SubSection, } from '../../components/SubSection'
import { categorizedSkills } from '../../data/technicalSkills'

export const Skills = () => <SubSection color={'#FFF'}
                                        title={'TECHNOLOGIES, SKILLS, PATTERNS, PRACTICES'}>
  {categorizedSkills.map(skill => <RowWithGutter key={skill.name}
                                                 left={skill.category}
                                                 right={skill.content.map(it =>
                                                   <p>
                                                     {it}
                                                   </p>)}>

  </RowWithGutter>)}
</SubSection>
