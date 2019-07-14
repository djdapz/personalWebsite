import React from 'react'
import './app.css'
import { About, Contact, Courses, Header, NavBar, Projects, Resume } from './sections'


export const App = () =>
  <>
    <header>
      <NavBar/>
    </header>
    <Header/>
    <About/>
    <Projects/>
    <Resume/>
    <Courses/>
    <Contact/>
  </>