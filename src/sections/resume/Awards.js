import { awards } from '../../data/schools'
import React from 'react'
import { SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'

const Award = ({ award }) =>
  <SubSectionRow name={award.name}>
    <SubSectionText>
      {award.description}
    </SubSectionText>
  </SubSectionRow>

export const Awards = () => <SubSection color={'#FFF'}
                                        title={'RECOGNITIONS'}>
  {awards.map(award => <Award award={award}
                              key={award.name}/>)}
</SubSection>

