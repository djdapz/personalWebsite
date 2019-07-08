import React from "react"
import {Projects} from "./components/Projects";
import {Jobs} from "./components/Jobs";
import {Schools} from "./components/Schools";
import {Lanugages} from "./components/Languages";
import {Skills} from "./components/Skills";
import {Clubs} from "./components/Clubs";
import {Awards} from "./components/Awards";
import {Classes} from "./components/Classes";
import {cs, econ, technical} from "./data";
import {EmailForm} from "./components/EmailForm";
import chicagoImage from "./assets/images/chicago_edited.jpg";

import styled from "styled-components"

import "./app.css"

import {NavBar} from "./components/NavBar";
import {About} from "./components/About";
import {Section} from "./components/Section";

const HeaderImage = styled.div`
    position: relative;
    width: 100%;

    img {
        width: 100%;
    }
`;

const TextInHeader = styled.h1`
    position: absolute;
    text-align: center;
    top: 24%;
    width: 100%;
    color: #870202;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`


export const App = () =>
    <body>
    <header>
        <NavBar/>
    </header>


    <HeaderImage>
        <img src={chicagoImage}/>
        <TextInHeader className="text-in-header">
            Devon John D'Apuzzo
        </TextInHeader>
    </HeaderImage>


    <Section title={"About Me"} color={"#f0f0f0"}>
        <About/>
    </Section>

    <Section title={"Portfolio"} dividerColor={"f0f0f0"} color={"fff"}>
        <Projects/>
    </Section>


    <Section title={"Rèsumè"} color={"#C5BBDA"}>

        <a className="my-button" href="./assets/pdfs/resume.pdf" target="_blank">
            PDF Version
        </a>

        <div className="detail-section" id="top-detail-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        WORK EXPERIENCE
                    </h2>
                </div>
            </div>
            <hr/>
            <Jobs/>
        </div>

        <div className="detail-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        EDUCATION
                    </h2>
                </div>
            </div>
            <hr/>
            <Schools/>
        </div>


        <div className="detail-section" id="programming-languages-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        PROGRAMMING LANGUAGES
                    </h2>
                </div>
            </div>
            <hr/>


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
        </div>


        <div className="detail-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        TECHNOLOGIES AND SKILLS
                    </h2>
                </div>
            </div>
            <hr/>
            <Skills/>
        </div>


        <div className="detail-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        LEADERSHIP AND INVOLVEMENT
                    </h2>

                </div>
            </div>
            <hr/>
            <Clubs/>
        </div>


        <div className="detail-section">
            <div className="row">
                <div className="col-md-4">
                    <h2>
                        RECOGNITIONS
                    </h2>
                </div>
            </div>
            <hr/>
            <Awards/>
        </div>
    </Section>


    <div className="section" id="my-courses">
        <div className="scroll-to-patch" id="courses">
        </div>
        <div className="container">
            <div className="title-bar">
                <h1>
                    Courses
                </h1>

            </div>

            <div className="row">
                <div className="underline">
                    <hr/>
                </div>
            </div>

            <div className="detail-section" id="top-detail-section">
                <div className="row">
                    <div className="col-md-4">
                        <h2>
                            COMPUTER SCIENCE
                        </h2>
                    </div>
                </div>
                <hr/>

                <Classes classes={cs}/>
            </div>


            <div className="detail-section top-detail-section">
                <div className="row">
                    <div className="col-md-4">
                        <h2>
                            ECONOMICS
                        </h2>
                    </div>
                </div>
                <hr/>
                <Classes classes={econ}/>
            </div>


            <div className="detail-section">
                <div className="row">
                    <div className="col-md-4">
                        <h2>
                            ENGINEERING & ELECTIVES
                        </h2>
                    </div>
                </div>
                <hr/>
                <Classes classes={technical}/>
            </div>


            <div className="detail-section">

                <div className="row detail-row">
                    <div className="col-md-3 col-md-offset-1">
                        <h3>
                            **
                        </h3>
                    </div>
                    <div className="col-md-7">
                        <p>
                            Taken at the University of Edinburgh in the fall of 2015
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>


    <div className="section" id="my-contact">
        <div className="scroll-to-patch" id="contact">
        </div>
        <div className="container">
            <div className="title-bar">
                <h1>
                    Contact Me
                </h1>
            </div>

            <div className="row">
                <div className="underline">
                    <hr/>
                </div>
            </div>
            <div className="detail-section">
                <EmailForm/>
                <div className="row">
                    <div className="underline">
                        <hr/>
                    </div>
                </div>

                <div className="row detail-row icon-link-row">

                    <div className="col-sm-3 col-sm-offset-4 col-md-1 col-md-offset-5 col-xs-2 col-xs-offset-4">
                        <a target="_blank" href="https://www.linkedin.com/in/devon-d-apuzzo-91a08653"
                           className="icon-link">
                            <img src="assets/icons/linkedin.png"/>
                        </a>
                    </div>

                    <div className="col-sm-3 col-md-1 col-xs-6">
                        <a target="_blank" href="https://github.com/djdapz" className="icon-link">
                            <img src="assets/icons/github.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>