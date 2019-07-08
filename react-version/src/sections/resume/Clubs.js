import {clubs} from "../../data";
import React from "react"
import {SubSectionRow, SubSectionText} from "../../components/SubSection";

const ClubList = ({club}) => <p>
    <span>
        <u>{club.list_title} </u>
    </span>
    <ul>
        {club.list.map((detail) =>
            <li key={detail.title}>
                <span>{detail.title}</span>
                {detail.description && <span> : {detail.description}</span>}
            </li>)}
    </ul>
</p>;


const Club = ({club}) =>
    <SubSectionRow name={club.name}>
        <SubSectionText>
            {club.start} to {club.end}
        </SubSectionText>
        {club.description && <SubSectionText>{club.description}</SubSectionText>}
        {club.list && <ClubList club={club}/>}
    </SubSectionRow>;

export const Clubs = () => <div>
    {clubs.map(club => <Club club={club} key={club.list_title}/>)}
    <br/>
</div>;

