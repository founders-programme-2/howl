import styled from 'styled-components';

const Submit = styled.button`
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: var(--main-bg-color);
    transform: scale(1.1);
  }
`;

const GoBack = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  box-shadow: none;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div``;

export { Submit, GoBack, ButtonsContainer };
