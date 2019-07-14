import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.nav`

    background: ${props => props.shrink ? 'white' : 'transparent'};
    height: ${props => props.shrink ? '2.5rem' : '3.25rem'};
    
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    
    padding: 0 8rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavBarItems = styled.div`
    height: inherit;
    display: flex;  
`

const NavBarLink = styled.a`
    display: flex;
    align-items: center;
    height: inherit;
    color: #870202;
    -webkit-transition: all .7s ease;
    transition: all .7s ease;
    text-decoration: none;
    padding-left: .75rem;
    padding-right: .75rem;
    font-size: 0.875rem;
    
    :hover {
        background-color: rgb(240, 240, 240);;
        color: black;
    }
`

const NavBarTitle = styled(NavBarLink)`
  font-size: 1.125rem;
`

export const NavBar = () => {

  const [shrink, setShrink] = useState(false)

  const handleScroll = () => window.pageYOffset > 400 ? setShrink(true) : setShrink(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return <NavBarContainer shrink={shrink}>
    <NavBarTitle href="#header-image">
      Devon D'Apuzzo
    </NavBarTitle>

    <NavBarItems>
      <NavBarLink href="#about">ABOUT ME</NavBarLink>
      <NavBarLink href="#portfolio">PORTFOLIO</NavBarLink>
      <NavBarLink href="#resume">RESUME</NavBarLink>
      <NavBarLink href="#courses">COURSES</NavBarLink>
      <NavBarLink href="#contact">CONTACT</NavBarLink>
    </NavBarItems>

  </NavBarContainer>
}