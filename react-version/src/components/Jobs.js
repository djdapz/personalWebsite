import React from "react";
import {jobs} from "../data"

export const Jobs = ({}) =>
    <>
        {jobs.map((job, index) =>
            <div className="row detail-row">
                <div className="col-md-3 col-md-offset-1">
                    <h3>
                        {job.name}
                    </h3>
                </div>
                <div className="col-md-7">
                    <p>
                        {job.start}
                        {job.end && <span>to {job.end}</span>}
                        | {job.location}
                    </p>
                    <p>
                        <span className="resume-label">
                            Position:
                        </span> {job.title}
                    </p>
                    {job.description && <hr/>}
                    {job.description && <p>{job.description} </p>}
                    {index !== jobs.length - 1 && <br/>}
                </div>
            </div>
        )}
    </>;


