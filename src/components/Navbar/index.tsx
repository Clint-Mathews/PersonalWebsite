import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './styles';
import {FaBars}  from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
const Navbar = ({toggle}:any) => {
    const [scrollNav,setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY > 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/PersonalWebsite" onClick={toggleHome}>
                        CLINT MATHEWS
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="info" 
                            smooth={true} duration={500} spy={true} offset={-80}
                            >Info</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true} duration={500} spy={true} offset={-80}
                            >Education</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"
                            smooth={true} duration={500} spy={true} offset={-80}
                            >Work Experience</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink smooth={true} duration={500} spy={true} offset={-80} to="footer">Contact Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
