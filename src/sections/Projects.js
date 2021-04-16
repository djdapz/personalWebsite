import React, {useState} from 'react'
import {projects} from '../data/projects'
import styled from 'styled-components'
import {Section} from '../components/Section'
import {SubSection} from '../components/SubSection'

const tileSize = '300px'

const ProjectTile = styled.div`

  border-radius: 5px;
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

    background: linear-gradient(to top, #87020255, #c5bbda55),
    url("${(props) => props.img}"), no-repeat;
    background-size: cover;
  }

`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ProjectTileContent = styled.div`
  position: absolute;
  top: 0;
  height: ${tileSize};
  width: ${tileSize};
  padding: 2rem;
`

const ProjectButton = styled.a`
  all: unset;
  background: white;
  color: black;
  text-shadow: none;
  padding: .5rem;
  cursor: pointer;
  display: block;
  margin: .5rem 0;
  border: transparent 3px solid;
  border-radius: 5px;
  &:hover {
    background: #CCC;
  }
`

const Project = ({project}) => {
    const [hover, setHover] = useState(false)
    return <ProjectTile onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        img={`assets/${project.imgPath}`}>
        <ProjectTileContent>
            <h1>
                {project.title}
            </h1>
            <p>
                {project.blurb}
            </p>
            {hover && project.links.map(it => <ProjectButton target="_blank" href={it.link}>{it.title}</ProjectButton>)}
        </ProjectTileContent>
    </ProjectTile>
}

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
