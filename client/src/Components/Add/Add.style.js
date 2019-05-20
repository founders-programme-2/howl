import styled from 'styled-components';

export const NavBtn = styled.button`
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const BtnRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
