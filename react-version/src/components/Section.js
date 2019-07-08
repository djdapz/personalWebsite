import React from "react"
import styled from 'styled-components'

const OuterContiner = styled.div`
  background-color: ${props => props.color || "#fff"};
  
  padding:  2rem 6rem;
  
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 100rem;
  
  margin-left: auto;
  margin-right: auto;
`

const Underline = styled.hr`
  border: .5px solid ${props => props.color || "#fff"};
  width: 40rem;
  margin-bottom: 2rem;
`

export const Section = ({children, title, color, dividerColor}) =>
    <OuterContiner color={color}>
        <InnerContainer>
            <div className="title-bar">
                <h1>
                    {title}
                </h1>
            </div>
            <Underline color={dividerColor}/>
            {children}

        </InnerContainer>
    </OuterContiner>;