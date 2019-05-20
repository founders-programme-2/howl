import React from 'react';
import { Link } from 'react-router-dom';
import { Submit, GoBack, ButtonsContainer } from './Buttons.style';
import navigationUrls from '../../../constants/navigationUrls';

const { ADD_URL } = navigationUrls;

const Buttons = ({ handleSubmit }) => {
  return (
    <ButtonsContainer>
      <Link to={ADD_URL}>
        <GoBack type="button" value="Go Back" />
      </Link>
      <Submit type="button" value="Submit" onClick={handleSubmit} />
    </ButtonsContainer>
  );
};

export default Buttons;
