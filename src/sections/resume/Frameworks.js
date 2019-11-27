import React from 'react'
import { RowWithGutter } from '../../components/SubSection'
import { Competency } from './Languages'

const Framework = ({ framework }) =>
  <RowWithGutter
    left={
      framework.name
    }
    right={<Competency star={framework.proficiency}/>}
  />

export const Frameworks = ({ frameworks }) => <>
  {frameworks.map(framework => <Framework key={framework.name} framework={framework}/>)}
</>
