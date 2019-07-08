import {EmailForm} from "./EmailForm";
import React from "react";
import styled from 'styled-components'

import {Section} from "../../components/Section";
import {Divider} from "../../components/SubSection";

import linkedIn from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

const IconRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Contact = () =>
    <Section title={"Contact Me"} color={"#C5BBDA"} id={"contact"}>
        <EmailForm/>
        <Divider/>
        <IconRow>
            <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/devon-d-apuzzo-91a08653"
               className="icon-link">
                <img src={linkedIn} alt={"Linked in"}/>
            </a>

            <a  rel="noopener noreferrer" target="_blank" href="https://github.com/djdapz" className="icon-link">
                <img src={github} alt={"Git Hub"}/>
            </a>
        </IconRow>
    </Section>