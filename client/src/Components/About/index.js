import React, { Fragment } from 'react';
import aboutImage from '../../assets/about_page.jpg';
import Simg from './About.style';
import Footer from '../Common/Footer';

const About = ({ setFilters }) => {
  return (
    <Fragment>
      <main>
        <header>
          <h1>About Howl</h1>
        </header>
        <Simg src={aboutImage} alt="HOWL women at a protest" />
        <p>
          The History of Women&#39;s Liberation (HOWL) project arose initially
          out of discussions older/old feminists were holding about the
          importance of collecting and producing our own history. Our time is
          limited. We need to act now. In HOWL, we intend to collectively create
          a broad picture that includes and represents women from all parts of
          the UK. Our core collection years are from 1965 to the 1990s. We will
          achieve this through reaching out to old feminists, creating a
          website, collecting oral histories, gathering memorabilia and holding
          events. HOWL originated in London but we are committed to making sure
          that the voices and materials collected are diverse, inclusive and
          cover the whole of the UK.
        </p>
        <h2>Want to get involved?</h2>
        <p>
          Send an email introducing yourself to howl@howl-uk.org and come to
          one of our meetings!
        </p>
        <h2>Donate</h2>
        <p>Passionate about our cause? We are always looking for donations.</p>
        <h2>Contact Us</h2>
        <p>Have a question? Send us an email at howl@howl-uk.org</p>
      </main>
      <Footer setFilters={setFilters} />
    </Fragment>
  );
};

export default About;
