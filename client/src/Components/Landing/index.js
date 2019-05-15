/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from 'react';
import { Smain, Sheader, Sp, SLink, Sa, Sh2, SsectionNav, SsectionWho, Simg, Sh1 } from './Landing.style';
import landingImage from '../../assets/landing_page.jpg';

const Landing = () => {
  return (
    <Fragment>
      <a name="topLink" aria-label="Navigation bar" />
      <Smain>
        <Sheader>
          <Sp>Welcome to Howl:</Sp>
          <Sh1>A History of <br /> Women&#39;s Liberation</Sh1>
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
            Browse our our story and photo archive by using the archive controls
            at{' '}
            <Sa href="#bottomLink" aria-label="Scroll to bottom">
              the bottom of this page
            </Sa>{' '}
            to filter your results by category, location, tags or year. The
            yellow bar of years above the search controls allows you to view
            stories from within a four to five period of time. 
            
            <br />
            <br />
            All other
            information is accessible from the black banner{' '}
            <Sa href="#topLink" aria-label="Scroll to top">
              the top of the page
            </Sa>
            . From there, you can navigate to other parts of the project,
            including more information about Howl, the Women&#39;s Liberation
            Movement and other resources.
          </Sp>
        </SsectionNav>
      </Smain>
      <a name="bottomLink" aria-label="Search bar" />
    </Fragment>
  );
};

export default Landing;
