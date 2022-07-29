import Link from 'next/link';
import React from 'react';
import NavDropDown from '../NavDropDown/index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa'
import { GiArtificialHive} from 'react-icons/gi'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "hsl(210, 0%, 0%)", marginBottom: '20px'}}>
          <GiArtificialHive size="3rem" /><Span>Andre | Web Developer</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <NavDropDown>

      </NavDropDown>
      {/* <div className="nav-dropdown-items">
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </div> */}
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/gibstock'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/andre-dev/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.knucklecuts.com/'>
        <FaBlog size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
