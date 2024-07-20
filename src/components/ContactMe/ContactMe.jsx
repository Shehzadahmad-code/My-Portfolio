 import React from 'react'
 import './ContactMe.css'
//  import email from './email.png'
import email from './email1.jpeg'
import github from './github.png'
import ContactMeInfoCard from './ContactMeInfoCard/ContactMeInfoCard'
import ContactFrom from './ContactFrom/ContactFrom'
 
 const ContactMe = () => {
   return (
    <section className='contact-container'>
        <h5>ContactMe</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
              <ContactMeInfoCard 
              iconurl={email} 
              Text={'hkrshahzad@gmail.com'}/>

              <ContactMeInfoCard 
              iconurl={github} 
              Text={'https:/github.com'}/>
            </div>
            <div style={{flex:1}}>
              <ContactFrom/>
            </div>
        </div>
    </section>
   )
 }
 
 export default ContactMe
 