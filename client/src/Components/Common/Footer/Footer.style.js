import styled from 'styled-components';
import '../../../globalStyle';

import responsiveSizes from '../../../constants/responsiveSizes';

const { MDM } = responsiveSizes;

export const FooterDiv = styled.footer`
  min-width: 100%;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  bottom: 0;
  position: relative;
  align-items: center;

  @media (max-width: ${MDM}) {
    flex-flow: column nowrap;
  }
`;

export const TitleDiv = styled.section`
  width: 30%;
  height: 100%;

  @media (max-width: ${MDM}) {
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  color: var(--secondary-font-color);
  text-align: center;
  text-transform: uppercase;
  margin: 5% 0 0 0;
`;

export const FilterDiv = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${MDM}) {
    width: 100%;
  }
`;

export const SearchDiv = styled.section`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;

  @media (max-width: ${MDM}) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const ButtonsContainer = styled.section`
  width: 80%;
  margin: 1% auto 0px;
  display: flex;
  justify-content: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
