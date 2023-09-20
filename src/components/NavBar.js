import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ transform: 'translateZ(0)' }}>
        <Container>
          <Navbar.Brand href="/">

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Services</Nav.Link>
              <Nav.Link href="#websites" className={activeLink === 'websites' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('websites')}>Website Templates</Nav.Link>
              <Nav.Link href="#pricing" className={activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
              <Nav.Link href="#booking" className={activeLink === 'booking' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('booking')}>Booking</Nav.Link>
              <Nav.Link href="#faq" className={activeLink === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faq')}>FAQ</Nav.Link>


            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/joshuadurham38/"><img src={navIcon1} alt="" /></a>

                <a href="https://www.instagram.com/josh.thewebdev/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
