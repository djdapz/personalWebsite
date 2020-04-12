import React from 'react'
import styled from 'styled-components'

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

const Underline = styled.hr`
  border: .5px solid ${props => props.color || '#fff'};
  max-width: 40rem;
  width: 100%;
  margin-bottom: 2rem;
`

const SectionTitleBar = styled.div`
  text-align: center;
  position: relative;
`

const ButtonWrapper = styled.span`
  position: absolute;
  right: 0
`

export const Section = ({ children, hideDivider, title, color, dividerColor, id, button }) =>
  <OuterContiner color={color}
                 id={id}>
    <InnerContainer>
      <SectionTitleBar>
        <h1>
          {title}
          <ButtonWrapper>
            {button}
          </ButtonWrapper>
        </h1>
      </SectionTitleBar>

      {!hideDivider && <Underline color={dividerColor}/>}
      {children}

    </InnerContainer>
  </OuterContiner>
