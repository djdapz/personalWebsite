import React from 'react'

const Class = ({eduClass}) => <div className="row detail-row">
    <div className="col-md-3 col-md-offset-1">
        <h3>
            {eduClass.dept} {eduClass.number}
        </h3>
    </div>
    <div className="col-md-7">
        <p>
            {eduClass.title}
        </p>

        {eduClass.technlology &&
        <p>
                <span className="resume-label">
                    Technology:
                </span> {eduClass.technology}
        </p>
        }

    </div>
</div>


export const Classes = ({classes}) => <div>
    {classes.map(it => <Class eduClass={it}/>)}
</div>