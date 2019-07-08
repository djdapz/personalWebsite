import {Classes} from "./Classes";
import {cs, econ, technical} from "../../data";
import React from "react";
import {Section} from "../../components/Section";
import {SubSection, SubSectionRow, SubSectionText} from "../../components/SubSection";


export const Courses = () =>
    <Section title={"Courses"} lightBackground={true} id={"courses"}>
        <SubSection title={"COMPUTER SCIENCE"} lightBackground={true}>
            <Classes classes={cs}/>
        </SubSection>
        <SubSection title={"ECONOMICS"} lightBackground={true}>
            <Classes classes={econ}/>
        </SubSection>
        <SubSection title={"ENGINEERING & ELECTIVES"} lightBackground={true}>
            <Classes classes={technical}/>
        </SubSection>
        <SubSectionRow name={"**"} lightBackground={true}>
            <SubSectionText>
                Taken at the University of Edinburgh in the fall of 2015
            </SubSectionText>
        </SubSectionRow>
    </Section>;
