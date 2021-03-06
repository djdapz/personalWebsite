import React from 'react'
import { SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'
import { jobs } from '../../data/jobs'
import { Divider } from '../../components/Divider'

export const Jobs = () =>
  <SubSection color={'#FFF'}
              title={'WORK EXPERIENCE'}>
    {jobs.map((job, index) =>
      <SubSectionRow key={index + job.name}
                     name={job.name}>
        <SubSectionText>
          {`${job.start} ${job.end ? ` to ${job.end}` : ''} | ${job.location}`}
        </SubSectionText>
        <SubSectionText>
                        <span className="resume-label">
                            Position:
                        </span> {job.title}
        </SubSectionText>
        <Divider color={'#FFF'}/>
        {job.description &&
        <SubSectionText>
          {job.description}
        </SubSectionText>
        }
        {job.list && <>
          <SubSectionText>
            <ul>
              {job.list.map(it => <li>{it}</li>)}
            </ul>
          </SubSectionText>
        </>}
        {index !== jobs.length - 1 && <br/>}
      </SubSectionRow>
    )}
  </SubSection>


