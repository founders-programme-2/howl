import React from 'react';
import { NavLink, NavList } from './Header.style';
import logoPath from '../../../Assets/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logoPath} alt="Howl logo" />
      <nav>
        <NavList>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Women's Liberation</NavLink>
          </li>
          <li>
            <NavLink>Feminist Resources</NavLink>
          </li>
          <li>
            <NavLink>The Archive</NavLink>
          </li>
          <li>
            <NavLink>Interactive Timeline</NavLink>
          </li>
        </NavList>
        <button type="button">Add Your Story</button>
      </nav>
    </header>
  );
};

export default Header;
