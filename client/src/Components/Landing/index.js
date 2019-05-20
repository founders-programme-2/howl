/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import {
  Smain,
  Sheader,
  Sp,
  SLink,
  Sh2,
  SsectionNav,
  SsectionWho,
  Simg,
  SaHidden,
} from './Landing.style';
import landingImage from '../../assets/landing_page.jpg';
import Footer from '../Common/Footer';

const Landing = () => {
  return (
    <Fragment>
      <Smain>
        <Sheader>
          <Sp>Welcome to Howl:</Sp>
          <h1>
            A History of <br /> Women&#39;s Liberation
          </h1>
        </Sheader>
        <SsectionWho>
          <Sh2>Who are we?</Sh2>
          <Sp>
            <SLink to="/about">Howl</SLink> is a group of UK-based women who are
            interested in building an archive of memories, ephemera and
            resources relating to the{' '}
            <SLink to="/wlm">Women&#39;s Liberation Movement</SLink> in the
            United Kingdom between the nineteen sixties and nineties. We welcome
            any sister with a memory relating to the movement to{' '}
            <SLink to="/add">add your story, photos or ephemera</SLink> to our
            archive.
          </Sp>
        </SsectionWho>
        <Simg src={landingImage} alt="A group of women and their children" />
        <SsectionNav>
          <Sh2>Navigation</Sh2>
          <Sp>
            Browse our story and photo archive by using the archive controls at{' '}
            <a href="#bottomLink" aria-label="Scroll to bottom">
              the bottom of this page
            </a>{' '}
            to filter your results by category, location, tags or year. The
            yellow bar of years above the search controls allows you to view
            stories from within a four to five period of time.
            <br />
            <br />
            All other information is accessible from the black banner{' '}
            <a href="#topLink" aria-label="Scroll to top">
              the top of the page
            </a>
            . From there, you can navigate to other parts of the project,
            including more information about Howl, the Women&#39;s Liberation
            Movement and other resources.
          </Sp>
        </SsectionNav>
      </Smain>
      <SaHidden name="bottomLink" aria-label="Search bar">
        <Footer />
      </SaHidden>
    </Fragment>
  );
};

export default Landing;
