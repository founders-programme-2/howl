import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavBtn } from './Add.style';
import navigationUrls from '../../constants/navigationUrls';

const Add = () => {
  const { FORM_URL } = navigationUrls;
  return (
    <Fragment>
      <main>
        <header>
          <h1>Share your voice!</h1>
          <h2>Guidelines and Conditions</h2>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin tortor lobortis, dapibus dui ac, dignissim nulla. In hac
          habitasse platea dictumst. Nullam dignissim, arcu sit amet iaculis
          suscipit, leo velit laoreet enim, ornare ultricies purus eros ut
          nulla. Aenean pellentesque mi mauris, sed ornare augue aliquet ac.
          Mauris posuere eleifend cursus. Fusce in mauris consectetur arcu
          mattis posuere. Sed at risus feugiat, condimentum dui in, viverra
          elit. Cras a feugiat lacus. Nulla facilisi. Ut bibendum nec ligula id
          molestie. In hac habitasse platea dictumst. In ac ornare purus, vitae
          pharetra nulla. Morbi rutrum sit amet sapien ac consectetur.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin tortor lobortis, dapibus dui ac, dignissim nulla. In hac
          habitasse platea dictumst. Nullam dignissim, arcu sit amet iaculis
          suscipit, leo velit laoreet enim, ornare ultricies purus eros ut
          nulla. Aenean pellentesque mi mauris, sed ornare augue aliquet ac.
          Mauris posuere eleifend cursus. Fusce in mauris consectetur arcu
          mattis posuere. Sed at risus feugiat, condimentum dui in, viverra
          elit. Cras a feugiat lacus. Nulla facilisi. Ut bibendum nec ligula id
          molestie. In hac habitasse platea dictumst. In ac ornare purus, vitae
          pharetra nulla. Morbi rutrum sit amet sapien ac consectetur.
        </p>
        <Link to={FORM_URL}>
          <NavBtn type="button">I agree, let's go.</NavBtn>
        </Link>
      </main>
    </Fragment>
  );
};

export default Add;
