import styled from 'styled-components';
import { Link } from 'react-router-dom';
import responsiveSizes from '../../../constants/responsiveSizes';

const { SML, LRG } = responsiveSizes;

export const NavSection = styled.nav`
  background-color: black;
  display: flex;
  flex-flow: row nowrap;
  min-width: 100%;
  justify-content: space-around;

  @media (max-width: ${SML}) {
    flex-flow: column nowrap;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: auto 2% auto 2%;
  padding: 0;

  @media (max-width: ${LRG}) {
    flex-flow: row wrap;
    justify-content: space-around;
  }

  @media (max-width: ${SML}) {
    flex-flow: column nowrap;
    margin-bottom: 1rem;
  }
`;

export const NavLi = styled.li`
  text-align: center;
  padding: 1.5rem;
`;

export const NavLink = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: ${props => props.theme.color};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--main-btn-color);
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  margin: 1rem 1rem 0 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CntrdWrapper = styled.div`
  margin-left: 2rem;

  @media (max-width: ${LRG}) {
    margin: auto;
  }

  @media (max-width: ${SML}) {
    margin: auto;
  }
`;

export const Sa = styled.a`
  font-size: 0;
`;
