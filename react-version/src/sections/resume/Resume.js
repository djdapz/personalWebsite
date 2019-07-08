import {Section} from "../../components/Section";
import {SubSection} from "../../components/SubSection";
import {Jobs} from "./Jobs";
import {Schools} from "./Schools";
import {Lanugages} from "./Languages";
import {Skills} from "./Skills";
import {Clubs} from "./Clubs";
import {Awards} from "./Awards";
import React from "react";

import pdf from "../../assets/pdfs/resume.pdf"

const PdfVersion = () => <a className="my-button" href={pdf} rel="noopener noreferrer" target="_blank">
    PDF Version
</a>

export const Resume = () =>
    <Section title={"Rèsumè"} color={"#C5BBDA"} id={'resume'} button={<PdfVersion/>}>

        <SubSection title={"WORK EXPERIENCE"}>
            <Jobs/>
        </SubSection>

        <SubSection title={"EDUCATION"}>
            <Schools/>
        </SubSection>


        <SubSection title={"PROGRAMMING LANGUAGES"}>
            <div className="programming-language-row">
                <div className="row detail-row">
                    <div className="col-xs-7 col-xs-offset-4">
                        <div className="competency-headers">
                            <div className="competency competency-header"><p>I've Used It</p></div>
                            <div className="competency competency-header"><p>Working Knowledge</p></div>
                            <div className="competency competency-header"><p>I'm Good at it</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Lanugages/>
        </SubSection>

        <SubSection title={"TECHNOLOGIES AND SKILLS"}>
            <Skills/>
        </SubSection>

        <SubSection title={"LEADERSHIP AND INVOLVEMENT"}>
            <Clubs/>
        </SubSection>

        <SubSection title={"RECOGNITIONS"}>
            <Awards/>
        </SubSection>

    </Section>
