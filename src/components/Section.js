import React from 'react'
import styled from 'styled-components'
import { SectionDivider } from './Divider'

const OuterContiner = styled.section`
  background-color: ${props => props.color || '#fff'};
  padding:  2rem 6rem;
  
`

const InnerContainer = styled.article`
  display: flex;
  flex-direction: column;
  
  max-width: 70rem;
  
  margin-left: auto;
  margin-right: auto;
`


const SectionTitleBar = styled.div`
  text-align: center;
  position: relative;
`

const ButtonWrapper = styled.span`
  position: absolute;
  right: 0
`

const SectionHeader = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 900;
  color: ${props => props.color}
`

export const Section = ({ children, title, color, dividerColor, id, button }) =>
  <OuterContiner color={color}
                 id={id}>
    <InnerContainer>
      <SectionTitleBar>
        <SectionHeader color={dividerColor}>
          {title}
          <ButtonWrapper>
            {button}
          </ButtonWrapper>
        </SectionHeader>
      </SectionTitleBar>

      {<SectionDivider color={dividerColor}/>}
      {children}

    </InnerContainer>
  </OuterContiner>
