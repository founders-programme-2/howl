import React from 'react';
import { NavLink, NavList, NavSection, NavLi, Logo } from './Header.style';
import logoPath from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <NavSection>
      <Logo src={logoPath} alt="Howl logo" />
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
      <button type="button">Add Your Story</button>
    </NavSection>
  );
};

export default Header;
