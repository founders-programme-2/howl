import { Link } from 'react-router-dom';
import styled from 'styled-components';

import responsiveSizes from '../../constants/responsiveSizes';

const { SML, MDM, MDM_LRG } = responsiveSizes;

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
  margin: auto 2rem;
  grid-area: who;
  max-width: 30rem;

  @media (max-width: ${SML}) {
    margin: 0 1rem;
  }
`;

export const Simg = styled.img`
  border-radius: 20px;
  max-width: 90%;
  margin: 0;
  grid-area: image;
  place-self: center;

  @media (max-width: ${MDM_LRG}) {
    max-width: 80%;
  }

  @media (max-width: ${MDM}) {
    max-width: 13rem;
  }

  @media (max-width: ${SML}) {
    max-width: 17rem;
    margin: 2rem 0;
  }
`;

export const Smain = styled.main`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'header header'
    'who image'
    'nav image';

  @media (max-width: ${MDM_LRG}) {
    grid-template-areas:
      'header header'
      'who image'
      'nav nav';
  }

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
