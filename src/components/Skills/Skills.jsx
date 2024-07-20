import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkilllsInfoCard from './SkillsInfoCard/SkilllsInfoCard'
const Skills = () => {
  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);

  const handleSelectedSkill=(data)=>{
    setSelectedSkill(data);
  }

  return (
    <section className='skills-container'>
      <h5>
        Technical Proficiency
      </h5>
      <div className='skills-content'>
        <div className='skills'>
          
          {SKILLS.map((item) =>(
           
            <SkillCard key={item.title}  title={item.title} iconUrl={item.icon}
            isActive={selectedSkill.title === item}
            onClick={()=>{
                handleSelectedSkill(item);
                console.log('clicked')
            }} />  
           
          ))
          }
        </div>

        <div className='skills-info'>
            <SkilllsInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
