import React from "react";
import {jobs} from "../../data"
import { Divider, SubSection, SubSectionRow, SubSectionText } from '../../components/SubSection'

export const Jobs = () =>
    <SubSection title={'WORK EXPERIENCE'}>
        {jobs.map((job, index) =>
            <SubSectionRow key={index + job.name} name={job.name}>
                <SubSectionText>
                    {`${job.start} ${job.end ? ` to ${job.end}` : ""} | ${job.location}`}
                </SubSectionText>
                <SubSectionText>
                        <span className="resume-label">
                            Position:
                        </span> {job.title}
                </SubSectionText>
                {job.description && <Divider/>}
                {job.description && <SubSectionText>{job.description} </SubSectionText>}
                {index !== jobs.length - 1 && <br/>}
            </SubSectionRow>
        )}
    </SubSection>;


