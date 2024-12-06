import React from 'react'
import './MobileNav.css'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
function MobileNav(props) {

    
  return (
    <>
    <div className={`mobile-menu ${props.isOpen? 'active':''}`} onClick={ props.openMenu} >
        <div className='mobile-menu-container'>
            <ul>
                <li>
                    <Link to="/#home" className='menu-item' smooth onClick={props.toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/#skill" className='menu-item' smooth onClick={props.toggleMenu}>Skills</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/#skill' smooth onClick={props.toggleMenu}>Work Experience</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/#contact' smooth onClick={props.toggleMenu}>Contact</Link>
                </li>
                </ul>
            
        <button className='nav-btn' onClick={()=>{}}>
           About me
        </button>
            
        </div>
        </div>
        
    </>  
  )
}

export default MobileNav
