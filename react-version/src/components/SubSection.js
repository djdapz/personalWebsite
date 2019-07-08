import React from "react";
import styled from 'styled-components'

export const ResumeRow = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const LeftSide = styled.div`
  width: 30%;
  text-align: right;
  padding: 0 1rem;
`;

export const RightSide = styled.div`
  width: 70%;
  text-align: left;
  padding: 0 1rem;
`;


export const Divider = styled.hr`
    border: .5px solid ${props => props.lightBackground ? "black" : "white"};
    margin-top: .25rem;
    margin-bottom: .25rem;
`;

const SubsectionRowTitle = styled.h3`
  margin: 0;
  font-weight: 200;
`;

const SubSectionTitle = styled.h2`
  font-weight: 300;
  color: ${props => props.lightBackground ? "black" : "white"};
`;

export const SubSectionText = styled.p`
 margin: 0;
`;

export const SubSectionRow = ({name, children}) =>
    <ResumeRow className="row detail-row">
        <LeftSide className="col-md-3 col-md-offset-1">
            <SubsectionRowTitle>
                {name}
            </SubsectionRowTitle>
        </LeftSide>
        <RightSide>
            {children}
        </RightSide>
    </ResumeRow>;


export const SubSection = ({title, children, lightBackground}) => <div>
    <ResumeRow>
        <LeftSide className="col-md-4">
            <SubSectionTitle lightBackground={lightBackground}>
                {title}
            </SubSectionTitle>
        </LeftSide>
    </ResumeRow>
    <Divider lightBackground={lightBackground}/>
    {children}
</div>;

