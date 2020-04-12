import styled from 'styled-components'

export const Divider = styled.hr`
    height: 2px;
    border: none;
    background-color: ${props => props.color ? props.color : 'black'};
    margin: .5rem 0;
`

export const SubsectionDivider = styled(Divider)`
    margin: 0 auto;
    width: 80%;
`

export const SectionDivider = styled(Divider)`
  width: 100%;
  margin-bottom: 2rem;
`
