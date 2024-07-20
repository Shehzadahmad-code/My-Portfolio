import React from 'react'
// import { SKILLS } from '../../../utils/data'
import './SkillsInfoCard.css'

function SkilllsInfoCard({heading, skills}) {
  return (<>
    <div className='skills-info-card'>
      <h3>{heading}</h3>

      <div className='skills-info-content'>
        {skills.map((item,index)=>(
          <React.Fragment key={`skill_${index}`}>
        <div className='skill-info'>
          <a>{item.skills}</a>
          <a className='percentage'>{item.percentage}</a>
        </div>

        <div className='skill-progress-bg'>
          <div className='skill-progress' style={{width:item.percentage}}/>
        </div>
        </React.Fragment>
      ))}
      </div>
    </div>
   </>
  )
}

export default SkilllsInfoCard
