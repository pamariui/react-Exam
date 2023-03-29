import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { BiIcons, FaIcons, IoIcons, SlIcons } from '../../utils/icons';
import { footerLinks } from './footer-link';


import './style.css'

const Footer = ({copyright}) => {
  
  const [isSupportOpen, setIsSuportOpen] = useState(false);

  const toggleSupport = () => {
    setIsSuportOpen(!isSupportOpen);
    document.body.classList.toggle('popup-open', !isSupportOpen);
  }

  return (
    
    <footer>
      <div className='footer-container'>
        <div className='left-container'>
          <p><FaIcons.FaRegCopyright/> {copyright}</p>

          <ol className="footer-links">
            {
              footerLinks.map((el, i) => {
                return (
                  <li key={i}>
                    <Link to={el.path}>
                      {el.title} {el.icon}
                    </Link>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div className='right-container'>
              <div className="language">
                  <BiIcons.BiGlobe/>
                  <p>English (US)</p> 
              </div>
              <div className='currency'>
                  <p> € EUR</p>
              </div>
              <div className="support" onClick={toggleSupport}>
                <p>Support & resources</p>
                <SlIcons.SlArrowUp />
              </div>
              
        </div>
      </div>
      
      {
              isSupportOpen && (
                <div className="support-popup show">
                   <div className='close-support' onClick={toggleSupport}>
                      <IoIcons.IoCloseOutline />
                   </div>
                   <div className="support-container">
                      <div>
                        <h3>Support</h3>
                        <ul>
                          <p></p>
                          <li>
                            Help Center
                          </li>
                          <li>
                            Aircover
                          </li>
                        </ul>
                      </div>
                   </div>
                </div>
              )
            }    
    </footer>
  )
}

export default Footer;