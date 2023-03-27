import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { FiIcons, 
         HiIcons,
         IoIcons } from '../../utils/icons';

const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className='logo' to={'/'}>
                <Link  to={'/'} >
                     <img src={logo} alt="" />
                </Link>
            </div>
            <div className='search-bar'>
                <input type="search" placeholder=''/>
                <div className="search-btns">
                    <button>Anywhere</button>
                    <span></span>
                    <button>Any weak</button>
                    <span></span>
                    <button>Add guest</button>
                    <IoIcons.IoSearchCircle className='search-icon'/>
                </div>
            </div>

            <div className='user-bar'>
                <button>Airdnb your home</button>
                <Link className='globe'>
                    <FiIcons.FiGlobe className=''/>
                </Link>
                <div className="user ">
                    <HiIcons.HiBars3 className='bars-icon'/>
                    <HiIcons.HiUserCircle className='user-icon'/>
                </div>
            </div>
        </div>
    </header>
  )
}


export  default Header;