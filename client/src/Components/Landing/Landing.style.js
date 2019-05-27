import { Link } from 'react-router-dom';
import styled from 'styled-components';

import responsiveSizes from '../../constants/responsiveSizes';

const { SML } = responsiveSizes;

export const Sheader = styled.header`
  grid-area: header;
  margin-bottom: 3rem;
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

  @media (max-width: ${SML}) {
    margin: 1rem;
  }
`;

export const SsectionWho = styled.section`
  margin: 0 2rem;
  grid-area: who;

  @media (max-width: ${SML}) {
    margin: 0 1rem;
  }
`;

export const Simg = styled.img`
  border-radius: 20px;
  width: 100%;
  margin: 0;
  grid-area: image;
  place-self: center;

  @media (max-width: ${SML}) {
    width: 80%;
    display: none;
  }
`;

export const Smain = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'header header'
    'who image'
    'nav nav';

  @media (max-width: ${SML}) {
    grid-template-columns: auto;
    grid-template-areas:
      'header'
      'who'
      'image'
      'nav';
  }
`;

export const SaHidden = styled.a`
  font-size: 0;
`;
