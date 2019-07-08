import {clubs} from "../data";
import React from "react"

const ClubList = ({club}) => <p>
    <span className="resume-label">
        <u>{club.list_title} </u>
    </span>
    <ul>
        {club.list.map((detail) =>
            <li>
                <span className="resume-label">{detail.title}</span>
                {detail.description && <span> : {detail.description}</span>}
            </li>)}
    </ul>
</p>;


const Club = ({club}) =>
    <div className="row detail-row">
        <div className="col-md-3 col-md-offset-1">
            {club.link ? <h3><a href={club.link} target="_blank">{club.name}</a></h3> : <h3>{club.name}</h3>}
        </div>
        <div className="col-md-7">
            <p>
                {club.start} to {club.end}
            </p>
            {club.description && <p>{club.description}</p>}
            {club.list && <ClubList club={club}/>}
        </div>
    </div>;

export const Clubs = () => <div>
    {clubs.map(club => <Club club={club}/>)}
    <br/>
</div>;

