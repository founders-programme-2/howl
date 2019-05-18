import React from 'react';
import { Link } from 'react-router-dom';
import { Submit, GoBack, ButtonsContainer } from './Buttons.style';
import navigationUrls from '../../../constants/navigationUrls';

const { ADD_URL } = navigationUrls;

const Buttons = () => {
  return (
    <ButtonsContainer>
      <Link to={ADD_URL}>
        <GoBack type="button">Go Back</GoBack>
      </Link>
      <Submit>Submit</Submit>
    </ButtonsContainer>
  );
};

export default Buttons;
