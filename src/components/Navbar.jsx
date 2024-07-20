import React, { useState } from 'react'
import  './Navbars.css'
import logo from './logo_nav.png'
import MobileNav from './mobileNav/MobileNav'

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)

  const toggleMenu=()=>{
    setOpenMenu(!openMenu);
  }
  return (<div>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper' style={{position:'sticky'}}>
        <div className='nav-content'>
           <div  className='logo'> <img className='img' src={logo} alt="logo" /></div>
           {/* <p className='logo-name'>
            Shahzee-Coder
           </p> */}
            <ul>
                <li>
                    <a className='menu-item' href='/'>Home</a>
                </li>
                 <li>
                    <a className='menu-item' href='/'>Skills</a>
                </li><li>
                    <a className='menu-item' href='/'>Work Experience</a>
                </li><li>
                    <a className='menu-item' href='/'>Contact</a>
                </li>
            
        <button className='nav-btn' onClick={()=>{}}>
            About Me
        </button>
        </ul>

        <button className='menu-btn' onClick={toggleMenu}>
          <span
            className={"material-symbols-outlined"}
            style={{fontSize:'1.8rem'}}
            >
              {openMenu ? 'close':'menu'}
          </span>
        </button>
        </div>
      
    </nav>
    </div>
  )
}

export default Navbar
