import React from 'react'
import { SubSectionRow } from '../../components/SubSection'
import { Copmetency } from './Languages'


const Framework = ({ framework }) => <SubSectionRow name={framework.name}>
  <Copmetency star={framework.proficiency}/>
</SubSectionRow>

export const Frameworks = ({ frameworks }) => <>
  {frameworks.map(framework => <Framework key={framework.name} framework={framework}/>)}
</>
