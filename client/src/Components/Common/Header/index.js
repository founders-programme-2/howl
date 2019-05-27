import React from 'react';
import { Link } from 'react-router-dom';
import navigationUrls from '../../../constants/navigationUrls';
import {
  NavLink,
  NavList,
  NavSection,
  NavLi,
  Logo,
  NavBtn,
  CntrdWrapper,
  Sa,
} from './Header.style';
import logoPath from '../../../assets/logo.svg';

const {
  ABOUT_URL,
  ADD_URL,
  ARCHIVE_URL,
  RESOURCES_URL,
  TIMELINE_URL,
  WLM_URL,
} = navigationUrls;

const Header = () => {
  return (
    <NavSection>
      <Sa href="#top" name="topLink" aria-label="Navigation to top of page">
        Top of page
      </Sa>
      <CntrdWrapper>
        <Link to="/">
          <Logo src={logoPath} alt="Howl logo" />
        </Link>
      </CntrdWrapper>
      <NavList>
        <NavLi>
          <NavLink to={ABOUT_URL}>About Howl</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={WLM_URL}>Women&#39;s Liberation</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={RESOURCES_URL}>Feminist Resources</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={ARCHIVE_URL}>The Archive</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to={TIMELINE_URL}>Interactive Timeline</NavLink>
        </NavLi>
      </NavList>
      <CntrdWrapper>
        <Link to={ADD_URL}>
          <NavBtn type="button">Add Your Story</NavBtn>
        </Link>
      </CntrdWrapper>
    </NavSection>
  );
};

export default Header;
