import styled from 'styled-components';

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
`;

export const NavLi = styled.li`
  text-align: center;
`;

export const NavLink = styled.a`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  color: white;
  list-style: none;
`;

export const Logo = styled.img`
  margin: 1rem;
`;
