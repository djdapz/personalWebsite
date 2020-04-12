import React from 'react'
import { projects } from '../data/projects'
import styled from 'styled-components'
import { Section } from '../components/Section'
import { SubSection } from '../components/SubSection'

const tileSize = '300px'

const ProjectTileLink = styled.a`
  text-decoration: none;
`

const ProjectTile = styled.div`
    text-align: center;
    background: rgb(226, 226, 226);
    height: ${tileSize};
    width: ${tileSize};
    color: black;
    margin: 1rem;
    
    position: relative;
    
    :hover {
        color: #FFF;
        text-shadow: black 0.1em 0.1em 0.2em;
        cursor: pointer;
        
        img {
          display: block;
        }
    }
    
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ProjectImg = styled.img`
  display: none;
  height: ${tileSize};
  width: ${tileSize};
  position: relative; 
`

const ProjectTileContent = styled.div`
  position: absolute; 
  top: 0;
  height: ${tileSize};
  width: ${tileSize};
  padding: 2rem;
`

const Project = ({ project }) =>
  <ProjectTileLink target="_blank"
                   href={project.link}
                   className="tile-link">
    <ProjectTile>
      <ProjectImg src={require(`../assets/${project.imgPath}`)}/>
      <ProjectTileContent>
        <h1>
          {project.title}
        </h1>
        <p>
          {project.blurb}
        </p>
      </ProjectTileContent>
    </ProjectTile>
  </ProjectTileLink>

export const Projects = () =>
  <Section title={'Portfolio'}
           color={'fff'}
           id={'portfolio'}
           dividerColor={'#870202'}>
    {projects.map(projectList =>
      <SubSection title={projectList.title}
                  color={'#870202'}>
        <ProjectsContainer>
          {projectList.projects.map(it => <Project key={it.title}
                                                   project={it}/>)}
        </ProjectsContainer>
      </SubSection>
    )}
  </Section>
