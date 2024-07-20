import React from 'react'
import './ContactFrom.css'

const ContactFrom = () => {
  return (
    <div>
      <div className="contact-form-content">
        <form >
            <div className='name-container'>
                <input type="text" name='firstname' placeholder='First Name' />
                {/* <input type="text" name='lastname' placeholder='Last Name'  /> */}
           
            </div>
            <div className='name-container'>
                {/* <input type="text" name='firstname' placeholder='First Name' /> */}
                <input type="text" name='lastname' placeholder='Last Name'  />
           
            </div>
            <input type="text" name='email' placeholder='Email' />
            <textarea type='text' name="message" placeholder='Message'  rows={3} ></textarea>
            <button>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ContactFrom
