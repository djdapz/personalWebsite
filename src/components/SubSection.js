import React from 'react'
import styled from 'styled-components'
import { BREAKPOINT } from '../constants'

export const ResumeRow = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0 6rem;
  @media (max-width: ${BREAKPOINT}){
    padding: 0;
    display: block;
  }
`

export const LeftSide = styled.div`
  width: 30%;
  text-align: right;
  padding: 0 1rem;
  
  @media (max-width: ${BREAKPOINT}){
    text-align: center;
    width: 100%;
  }
`

export const RightSide = styled.div`
  width: 70%;
  text-align: left;
  padding: 0 1rem;
  
 @media (max-width: ${BREAKPOINT}){
  text-align: center;
    width: 100%;
  }
`

export const Divider = styled.hr`
    border: .5px solid ${props => props.color ? props.color : 'black'};
    margin: .5rem 0;
`

const SubsectionDivider = styled(Divider)`
  margin: 0 auto;
  width: 80%;
`

const SubsectionRowTitle = styled.h3`
  margin: 0;
  font-weight: 200;
`

const SubSectionTitle = styled.h2`
  font-weight: 300;
  margin: .5rem 0;
  text-transform: uppercase;
  color: ${props => props.color ? props.color : 'black'};
`

export const SubSectionText = styled.p`
 margin: 0;
`
export const RowWithGutter = ({ left, right }) =>
  <ResumeRow className="row detail-row">
    <LeftSide>
      {left}
    </LeftSide>
    <RightSide>
      {right}
    </RightSide>
  </ResumeRow>

export const SubSectionRow = ({ name, children }) =>
  <RowWithGutter
    left={<SubsectionRowTitle>
      {name}
    </SubsectionRowTitle>}
    right={children}
  />

export const SubSection = ({ title, children, color }) => <div>
  <ResumeRow>
    <LeftSide className="col-md-4">
      <SubSectionTitle color={color}>
        {title}
      </SubSectionTitle>
    </LeftSide>
  </ResumeRow>
  <SubsectionDivider color={color}/>
  {children}
</div>

