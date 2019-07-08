import React from "react";

export const Copmetency = ({number}) =>
    new Array(number).fill(0).map((ignored, index) =>
        <div key={index} className={"competency"}>
            {number < index ? <div className="competency-empty"/> : <div className="competency-full"/>}
        </div>);


const Framework = ({framework}) => <div>
    <div className="col-xs-3 col-xs-offset-1">
        <p>
            {framework.name}
        </p>
    </div>

    <div className="col-xs-7 col-xs-offset-0">
        <div className="star-section">
            <Copmetency star={framework.proficiency}/>
        </div>
    </div>
</div>;

export const Frameworks = ({frameworks}) =>
    <div className="row framework-detail-row">
        <div className="row framework-detail-sub-row">
            <div className="row">
                {frameworks.map(framework => <Framework key={framework.name} framework={framework}/>)}
            </div>
        </div>
    </div>;
