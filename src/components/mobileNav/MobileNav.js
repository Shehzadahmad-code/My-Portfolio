import React from 'react'
import './MobileNav.css'
function MobileNav(props) {
    
  return (
    <>
    <div className={`mobile-menu ${props.isOpen? 'active':''}`} onClick={props.toggleMenu} >
        <div className='mobile-menu-container'>
            <ul>
                <li>
                    <a href="/" className='menu-item'>Home</a>
                </li>
                <li>
                    <a href="/" className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item' href='/'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item' href='/'>Contact</a>
                </li>
            
        <button className='nav-btn' onClick={()=>{}}>
           About me
        </button>
            </ul>
        </div>
        </div>
        
    </>  
  )
}

export default MobileNav
