import React from 'react'
import { SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'
import { clubs } from '../../data/courses'

const ClubList = ({ club }) => <p>
    <span>
        <u>{club.list_title} </u>
    </span>
  <ul>
    {club.list.map((detail) =>
      <li key={detail.title}>
        <span>{detail.title}</span>
        {detail.description && <span> : {detail.description}</span>}
      </li>)}
  </ul>
</p>

const Club = ({ club }) =>
  <SubSectionRow name={club.name}>
    <SubSectionText>
      {club.start} to {club.end}
    </SubSectionText>
    {club.description && <SubSectionText>{club.description}</SubSectionText>}
    {club.list && <ClubList club={club}/>}
  </SubSectionRow>

export const Clubs = () => <SubSection title={'LEADERSHIP AND INVOLVEMENT'}>
  {clubs.map(club => <Club club={club} key={club.list_title}/>)}
  <br/>
</SubSection>

