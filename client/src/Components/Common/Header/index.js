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
  BtnWrapper,
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
      <Link to="/">
        <Logo src={logoPath} alt="Howl logo" />
      </Link>
      <NavList>
        <NavLi>
          <NavLink
            to={ABOUT_URL}
            theme={{ color: url === ABOUT_URL ? 'yellow' : 'white' }}
          >
            About Howl
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to={WLM_URL}
            theme={{ color: url === WLM_URL ? 'yellow' : 'white' }}
          >
            Women&#39;s Liberation
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to={RESOURCES_URL}
            theme={{ color: url === RESOURCES_URL ? 'yellow' : 'white' }}
          >
            Feminist Resources
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to={ARCHIVE_URL}
            theme={{ color: url === ARCHIVE_URL ? 'yellow' : 'white' }}
          >
            The Archive
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to={TIMELINE_URL}
            theme={{ color: url === TIMELINE_URL ? 'yellow' : 'white' }}
          >
            Interactive Timeline
          </NavLink>
        </NavLi>
      </NavList>
      <BtnWrapper>
        <Link to={ADD_URL}>
          <NavBtn type="button">Add Your Story</NavBtn>
        </Link>
      </BtnWrapper>
    </NavSection>
  );
};

export default withRouter(Header);
