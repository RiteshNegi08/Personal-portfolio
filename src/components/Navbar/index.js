import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, HeaderAction, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <Span>Ritesh Negi</Span>
        </NavLogo>
        <MobileIcon type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <FaBars aria-hidden="true" />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#certifications'>Certifications</NavLink>
          <NavLink href='#achievements'>Achievements</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <HeaderAction
            as={Bio.resume ? 'a' : 'button'}
            href={Bio.resume || undefined}
            target={Bio.resume ? '_blank' : undefined}
            rel={Bio.resume ? 'noreferrer' : undefined}
            disabled={!Bio.resume}
            aria-label={Bio.resume ? 'Open resume' : 'Resume link placeholder'}
          >Resume</HeaderAction>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen} aria-label="Mobile navigation">
            {[
              ["Home", "home"],
              ["About", "about"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Skills", "skills"],
              ["Certifications", "certifications"],
              ["Achievements", "achievements"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <MobileLink key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</MobileLink>
            ))}
            <HeaderAction
              as={Bio.resume ? 'a' : 'button'}
              href={Bio.resume || undefined}
              target={Bio.resume ? '_blank' : undefined}
              rel={Bio.resume ? 'noreferrer' : undefined}
              disabled={!Bio.resume}
              aria-label={Bio.resume ? 'Open resume' : 'Resume link placeholder'}
            >Resume</HeaderAction>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar