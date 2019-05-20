import styled from 'styled-components';

const Submit = styled.input`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 0.8rem;
  margin: 1rem;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  background: var(--highlight-color);
  color: white;
  &:hover {
    cursor: pointer;
    background: var(--main-bg-color);
    color: black;
    transform: scale(1.1);
  }
`;

const GoBack = styled.input`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  background: none;
  border: none;
  padding: 0.8rem;
  margin: 1rem;
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
