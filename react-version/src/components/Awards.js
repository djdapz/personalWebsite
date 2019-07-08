import {awards} from "../data";
import React from "react"


const Award = ({award}) =>
    <div className="row detail-row">
        <div className="col-md-3 col-md-offset-1">
            <h3>
                {award.name}
            </h3>
        </div>
        <div className="col-md-7">
            <p>
                {award.description}
            </p>
        </div>
    </div>

export const Awards = () => <div>
    {awards.map(award => <Award award={award}/>)}
</div>

