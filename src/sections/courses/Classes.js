import React from 'react'
import {SubSectionRow, SubSectionText} from "../../components/SubSection";

const Class = ({eduClass}) =>
    <SubSectionRow name={`${eduClass.dept || ""} ${eduClass.number}`}>
        <SubSectionText>
            {eduClass.title}
        </SubSectionText>

        {eduClass.technology &&
        <SubSectionText>
                <span className="resume-label">
                    Technology:
                </span> {eduClass.technology}
        </SubSectionText>
        }
    </SubSectionRow>;

export const Classes = ({classes}) => <div>
    {classes.map((it, i) => <Class eduClass={it} key={`${it.number}-${i}`}/>)}
</div>