import {skills} from "../../data/technicalSkills";
import React from "react"
import { SubSection, SubSectionRow, SubSectionText, } from '../../components/SubSection'


export const Skills = () => <SubSection title={'TECHNOLOGIES AND SKILLS'}>
    {skills.map(skill => <SubSectionRow key={skill.name}>
        <SubSectionText>
            {skill.name}
        </SubSectionText>
    </SubSectionRow>)}
</SubSection>;