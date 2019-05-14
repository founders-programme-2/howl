import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavSection = styled.nav`
  background-color: black;
  display: flex;
  flex-flow: row nowrap;
  min-width: 100%;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  padding: 0;
`;

export const NavLi = styled.li`
  text-align: center;
  padding: 0.5rem;
`;

export const NavLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: white;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--main-bg-color);
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const NavBtn = styled.button`
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    transform: scale(1.1);
  }
`;
