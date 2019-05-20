import styled from 'styled-components';

const Submit = styled.button`
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  background: var(--highlight-color);
  color: white;
  &:hover {
    cursor: pointer;
    background-color: var(--main-bg-color);
    color: black;
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

const ButtonsContainer = styled.div`
  margin: 2%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

export { Submit, GoBack, ButtonsContainer };
