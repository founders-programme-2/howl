import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Sheader = styled.header`
  grid-area: header;
  margin-bottom: 5rem;
`;

export const Sp = styled.p`
  margin: 0;
`;

export const SLink = styled(Link)`
  color: var(--highlight-color);
  font-weight: 700;
`;


export const Sh2 = styled.h2`
  font-variant: small-caps;
  font-size: 1.2rem;
  line-height: 1.1rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  margin: 0;
`;

export const SsectionNav = styled.section`
  grid-area: nav;
  margin: 2rem;
`;

export const SsectionWho = styled.section`
  margin: 0 2rem;
  width: 25vw;
  grid-area: who;
`;

export const Simg = styled.img`
  border-radius: 20px;
  width: 20vw;
  margin: 0;
  grid-area: image;
`;

export const Smain = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'header header'
    'who image'
    'nav nav';
`;

export const SaHidden = styled.a`
  font-size: 0;
`;
