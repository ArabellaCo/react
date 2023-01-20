import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import picture1 from '../assets/img/nav-icon1.svg';
import picture2 from '../assets/img/nav-icon2.svg';
import picture3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/"><img src={picture1} alt="" /></a>
                <a href="https://www.facebook.com/"><img src={picture2} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={picture3} alt="" /></a>
              </div>
              <button className="vvd"><span>Follow me</span></button>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

