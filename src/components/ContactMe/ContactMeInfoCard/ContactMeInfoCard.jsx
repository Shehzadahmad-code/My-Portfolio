import React from 'react'
import './ContactMeInfoCard.css'

const ContactMeInfoCard = ({iconurl, Text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconurl} alt={Text} />
      </div>
      <p>{Text}</p>
      
    </div>
  )
}

export default ContactMeInfoCard
