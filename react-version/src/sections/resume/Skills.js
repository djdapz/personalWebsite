import {skills} from "../../data";
import React from "react"
import {SubSectionRow, SubSectionText,} from "../../components/SubSection";


export const Skills = () => <>
    {skills.map(skill => <SubSectionRow key={skill.name}>
        <SubSectionText>
            {skill.name}
        </SubSectionText>
    </SubSectionRow>)}
</>;