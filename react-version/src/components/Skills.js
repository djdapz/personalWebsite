import {skills} from "../data";
import React from "react"


const Skill = ({skill}) => <div className="row detail-row">
    <div className="col-md-3 col-md-offset-1">
        <h3>

        </h3>
    </div>
    <div className="col-md-7">
        <p>
            {skill.name}
        </p>
    </div>
</div>;

export const Skills = () => <>
    {skills.map(skill => <Skill skill={skill}/>)}
</>;