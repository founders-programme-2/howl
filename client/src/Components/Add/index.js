import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Sbtn } from './Add.style';
import navigationUrls from '../../constants/navigationUrls';

const Add = () => {
  const { FORM_URL } = navigationUrls;
  return (
    <Fragment>
      <main>
        <header>
          <h1>Share your story</h1>
        </header>
        <h2>Guidelines and Conditions</h2>
        <p>
        HOWL aims to include as many as possible of the different ‘voices’ of women’s liberation in the UK. 
        We didn’t all agree on how women’s liberation could be achieved, what feminism actually means, who 
        it includes, and who it sometimes excludes. Many of the differences and difficulties which arose in 
        the early years of the movement focussed on issues of exclusion based on institutionalized racism, 
        class, and sexual identities, to name a few. As well, different explanations about women’s oppression 
        and different political positions about the tasks at hand and ahead arose. Many women identified as 
        radical feminists, or socialist feminists, or black feminists, or lesbian feminists, or revolutionary 
        feminists - and there were more. We intend to include it all! We want the whole picture; history 
        deserves the broad picture.

        However - while HOWL is committed to providing space for all of this, we want to avoid personal 
        attacks and accusation. Where they arose, schisms, struggles, even bitterness will be included. 
        But, gratuitous attacks on individuals will not be included.  
        </p>
        <Link to={FORM_URL}>
          <Sbtn type="button">I agree, let&#39;s go.</Sbtn>
        </Link>
      </main>
    </Fragment>
  );
};

export default Add;
