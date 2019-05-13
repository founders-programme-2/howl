import React from 'react';
import { NavLink, NavList, NavSection, NavLi, Logo } from './Header.style';
import logoPath from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <NavSection>
      <Logo src={logoPath} alt="Howl logo" />
      <NavList>
        <NavLi>
          <NavLink>About Howl</NavLink>
        </NavLi>
        <NavLi>
          <NavLink>Women&#39;s Liberation</NavLink>
        </NavLi>
        <NavLi>
          <NavLink>Feminist Resources</NavLink>
        </NavLi>
        <NavLi>
          <NavLink>The Archive</NavLink>
        </NavLi>
        <NavLi>
          <NavLink>Interactive Timeline</NavLink>
        </NavLi>
      </NavList>
      <button type="button">Add Your Story</button>
    </NavSection>
  );
};

export default Header;
