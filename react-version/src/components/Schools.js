import React from "react";
import {schools} from "../data"

const School = ({school}) => <div className="row detail-row">
    <div className="col-md-3 col-md-offset-1">
        <h3>
            {school.name}
        </h3>
    </div>
    <div className="col-md-7">
        <p>
            {school.start} to {school.end} | {school.location}
        </p>


        {school.major && <p>
            <span className="resume-label">MAJOR:</span> {school.major}
        </p>
        }
        {school.minor && <p>
            <span className="resume-label"> MINOR:</span> {school.minor}
        </p>
        }
        {school.other && <p>
            <span className="resume-label">OTHER:</span> {school.other}
        </p>
        }
    </div>
</div>


export const Schools = () => <>
    {schools.map((school) => <School school={school}/>)}
    <br/>
</>;