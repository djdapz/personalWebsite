import React from 'react'
import { schools } from '../../data/schools'
import { SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'

const School = ({ school }) => <SubSectionRow name={school.name}>
  <SubSectionText>
    {school.start} to {school.end} | {school.location}
  </SubSectionText>


  {school.major && <SubSectionText>
    <span className="resume-label">MAJOR:</span> {school.major}
  </SubSectionText>
  }
  {school.minor && <SubSectionText>
    <span className="resume-label"> MINOR:</span> {school.minor}
  </SubSectionText>
  }
  {school.other && <SubSectionText>
    <span className="resume-label">OTHER:</span> {school.other}
  </SubSectionText>
  }
</SubSectionRow>

export const Schools = () => <SubSection title={'EDUCATION'}>
  {schools.map((school) => <School key={school.name} school={school}/>)}
  <br/>
</SubSection>