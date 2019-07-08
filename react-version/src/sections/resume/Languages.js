import {languages} from "../../data";
import React from "react";
import {Copmetency, Frameworks} from "./Frameworks";


const Language = ({language}) =>
    <div className="programming-language-row">
        <div className="row detail-row">
            <div className="col-xs-3 col-xs-offset-1">
                <h3>
                    {language.name}
                </h3>
            </div>
            <div className="col-xs-7 col-xs-offset-0">
                <div className="star-section">
                    <Copmetency star={language.proficiency}/>
                </div>
            </div>
        </div>
        {language.frameworks && <Frameworks frameworks={language.frameworks}/>}
    </div>;

export const Lanugages = () => <>
    {languages.map(language => {
        return <Language key={language.name} language={language}/>
    })}
</>