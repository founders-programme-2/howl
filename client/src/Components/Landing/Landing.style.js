import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sheader = styled.header`
  margin: 5rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  grid-area: header;
`
export const Sh1 = styled.h1`
font-size: 4rem;
`

export const Sp = styled.p`
  font-variant: small-caps;
  line-height: 1.2rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  fonts-size: 2rem;
`;

export const SLink = styled(Link)`
  color: var(--highlight-color);
  font-weight: 700;
`;

export const Sa = styled.a`
  color: var(--highlight-color);
  font-weight: 700;
`;

export const Sh2 = styled.h2`
  font-variant: small-caps;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
`;

export const Ssection = styled.section`
  margin: 2rem;
`;

export const Ssection_Who = styled(Ssection)`
  margin: 2rem 5rem;
  width: 30vw;
`;

export const Simg = styled.img`
  border-radius: 20px;
  width: 25vw;
  margin: 0 2rem;
`;

export const Smain = styled.main`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: "header header"
    "who image"
    "nav nav"
}
`;