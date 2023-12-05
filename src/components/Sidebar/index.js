import { Link, NavLink } from "react-router-dom";
import './index.scss'
import Oni from '../../assets/images/oni.jpg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {faHome,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar = ()=>{
    return <div className="nav-bar">

        <Link className="logo" to='/'>
            <img src={Oni} alt="logo"  />
            <img className="sub-logo" src={LogoSubtitle} alt="Ashura" />
        </Link>
        <nav>
            <NavLink exact= "true" activeclassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            
            <NavLink exact= "true" activeclassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            
            <NavLink exact= "true" activeclassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="blank" rel="noreferrer" 
                href="https://www.linkedin.com/in/pratikshit-chowdhury-8a3411162/">
                
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
             
                </a>
            </li>

            <li>
                <a target="blank" rel="noreferrer" 
                href="https://github.com/akshitchowdhury/">
                
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
             
                </a>
            </li>

            
        </ul>
    </div>
}

export default Sidebar