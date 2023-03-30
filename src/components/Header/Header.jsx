import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './style.css'
import logo from '../../assets/airbnb-icon.svg';
import { FiIcons, 
         HiIcons,
         IoIcons } from '../../utils/icons';

const Header = ({logoText, colorClass}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
          const headerElement = document.querySelector("header");
          if (headerElement && !headerElement.contains(event.target)) {
            setIsPopupOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

    return (
        <header>
            <div className='header'>
                <div className={`logo ${colorClass}`} to={'/'}>
                    <Link  to={'/'} >
                        <img src={logo} alt=""/>
                        <p className='logo-text'>{logoText}</p>
                    </Link>
                </div>
                <div className='search-bar'>
                    <input type="search" placeholder=''/>
                    <div className="search-btns">
                        <button>Anywhere</button>
                        <span className='vertical'></span>
                        <button >Any weak</button>
                        <span className='vertical'></span>
                        <button>Add guest</button>
                        <IoIcons.IoSearchCircle className='search-icon'/>
                    </div>
                </div>

                <div className='user-bar'>
                    <button>Airdnb your home</button>
                    <Link className='globe'>
                        <FiIcons.FiGlobe className=''/>
                    </Link>
                    <div className="user " onClick={togglePopup}>
                        <HiIcons.HiBars3 className='bars-icon'/>
                        <HiIcons.HiUserCircle className='user-icon'/>
                    </div>
                    {isPopupOpen && (
                        <div className="user-popup">
                            <ul>
                                <li>
                                    <a href="/">Sign up</a>
                                </li>
                                <li>
                                    <a href="/">Log in</a>
                                </li>
                            </ul>
                            <span className='horizontal'></span>
                            <ul>
                                <li>
                                    <a href="/">Airdnb your home</a>
                                </li>
                                <li>
                                    <a href="/">Host an experience</a>
                                </li>
                                <li>
                                    <a href="/privacy">Help</a>
                                </li>
                            </ul>                           
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}


export  default Header;