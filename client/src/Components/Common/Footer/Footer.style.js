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
    height: 17vh;
  }
`;

export const StyledTitle = styled.h2`
  color: var(--secondary-font-color);
  text-align: center;
  text-transform: uppercase;
  margin: 5% 0 0 0;
`;

export const FilterDiv = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  @media (max-width: ${MDM}) {
    width: 100%;
    margin: 4% auto;
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const SearchDiv = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;

  @media (max-width: ${MDM}) {
    width: 100%;
    margin-bottom: 4%;
  }
`;

export const ButtonsContainer = styled.section`
  width: 82%;
  margin: 1% auto;
  display: flex;
  justify-content: center;
  @media (max-width: ${MDM}) {
    width: 96.6%;
    margin: 0 auto 1.7%;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
