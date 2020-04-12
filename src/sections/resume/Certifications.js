import React from 'react'
import { SubSection, SubSectionRow } from '../../components/SubSection'
import { certifications } from '../../data/technicalSkills'

export const Certifications = () =>
  <SubSection title={'CERTIFICATIONS'}>
    {certifications.map(it => <CertificationRow certification={it}/>)}
  </SubSection>

const CertificationRow = ({ certification }) =>
  <SubSectionRow>
    {certification}
  </SubSectionRow>
