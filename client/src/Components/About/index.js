import React, { Fragment } from 'react';
import { Sheader, Ssection, Sp, Sh1, Sh2 } from './About.style'

const About = () => {
  return (
    <Fragment>
      <main>
        <Sheader>
          <Sh1>About Howl</Sh1>
        </Sheader>
        <Sp>
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
        </Sp>

        <Ssection>
          <Sh2>Want to get involved?</Sh2>
          <p>
            Send an email introducing yourself to fakeemail@gmail.com and come to one of our meetings!
          </p>
        </Ssection>
        <Ssection>
          <Sh2>Donate</Sh2>
          <p>
            Excited about our project? We are always looking for donations. 
    
          </p>
        </Ssection>
        <Ssection>
          <Sh2>Contact Us</Sh2>
          <p>
           Have a question? Send us an email at fakeemail@gmail.com.
          </p>
        </Ssection>
      </main>
    </Fragment>
  );
};

export default About;
