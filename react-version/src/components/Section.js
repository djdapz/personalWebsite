import React from "react"
import styled from 'styled-components'

const OuterContiner = styled.div`
  background-color: ${props => props.color || "#fff"};
  
  padding:  2rem 6rem;
  
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 100rem;
  
  margin-left: auto;
  margin-right: auto;
`;

const Underline = styled.hr`
  border: .5px solid ${props => props.color || "#fff"};
  width: 40rem;
  margin-bottom: 2rem;
`;

const SectionTitleBar = styled.div`
  text-align: center;
`;

const ButtonWrapper = styled.span`
  float: right;
`;

export const Section = ({children, title, color, dividerColor, id, button}) =>
    <OuterContiner color={color} id={id}>
        <InnerContainer>
            <SectionTitleBar>
                <h1>
                    {title}
                    <ButtonWrapper>
                        {button}
                    </ButtonWrapper>
                </h1>
            </SectionTitleBar>
            <Underline color={dividerColor}/>
            {children}

        </InnerContainer>
    </OuterContiner>;