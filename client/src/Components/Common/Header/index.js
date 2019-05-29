import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

const Header = ({ location }) => {
  const { pathname: url } = location;
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
          <NavLink
            to={ABOUT_URL}
            theme={{
              color: url === ABOUT_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            About Howl
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink
            to={WLM_URL}
            theme={{
              color: url === WLM_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            Women&#39;s Liberation
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink
            to={ARCHIVE_URL}
            theme={{
              color: url === ARCHIVE_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            The Archive
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink
            to={TIMELINE_URL}
            theme={{
              color: url === TIMELINE_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            Interactive Timeline
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink
            to={ADD_URL}
            theme={{
              color: url === RESOURCES_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            Add Story
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink
            to={RESOURCES_URL}
            theme={{
              color: url === RESOURCES_URL ? 'var(--main-btn-color)' : 'white',
            }}
          >
            Feminist Resources
          </NavLink>
        </NavLi>
      </NavList>
    </NavSection>
  );
};

export default withRouter(Header);
