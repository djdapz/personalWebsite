import React from "react";
import {jobs} from "../../data"
import {Divider, SubSectionRow, SubSectionText} from "../../components/SubSection";

export const Jobs = () =>
    <>
        {jobs.map((job, index) =>
            <SubSectionRow key={index + job.name} name={job.name}>
                <SubSectionText>
                    {job.start}
                    {job.end && <span>to {job.end}</span>}
                    | {job.location}
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
    </>;


