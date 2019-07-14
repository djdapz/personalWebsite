import chicagoImage from "../assets/images/chicago_edited.jpg";
import React from "react";
import styled from "styled-components";

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

export const Header = () =>
    <HeaderImage>
        <img src={chicagoImage} alt={"Chicago at sunset"}/>
        <TextInHeader className="text-in-header">
            Devon John D'Apuzzo
        </TextInHeader>
    </HeaderImage>
