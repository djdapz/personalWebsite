import {clubs} from "../data";
import React from "react"



const Club = ({club}) => {

}

export const Clubs = () => <>
    {clubs.map(club => <Club club={club}/>)}
</>