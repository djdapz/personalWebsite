import {awards} from "../../data";
import React from "react"
import {SubSectionRow, SubSectionText} from "../../components/SubSection";

const Award = ({award}) =>
    <SubSectionRow name={award.name}>
        <SubSectionText>
            {award.description}
        </SubSectionText>
    </SubSectionRow>;

export const Awards = () => <div>
    {awards.map(award => <Award award={award} key={award.name}/>)}
</div>;

