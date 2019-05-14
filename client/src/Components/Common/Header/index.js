import React from 'react';
import { Link } from 'react-router-dom';

import {
  NavLink,
  NavList,
  NavSection,
  NavLi,
  Logo,
  NavBtn,
} from './Header.style';

import logoPath from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <NavSection>
      <Link to="/">
        <Logo src={logoPath} alt="Howl logo" />
      </Link>
      <NavList>
        <NavLi>
          <NavLink to="/about">About Howl</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/wlm">Women&#39;s Liberation</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/resources">Feminist Resources</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/archive">The Archive</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="timeline">Interactive Timeline</NavLink>
        </NavLi>
      </NavList>
      <Link to="/story">
        <NavBtn type="button">Add Your Story</NavBtn>
      </Link>
    </NavSection>
  );
};

export default Header;
