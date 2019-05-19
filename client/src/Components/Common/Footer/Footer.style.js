import styled from 'styled-components';
import '../../../globalStyle';

export const FooterDiv = styled.footer`
  min-width: 100%;
  background-color: var(--secondary-bg-color);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  bottom: 0;
  position: relative;
`;

export const TitleDiv = styled.section`
  width: 30%;
  height: 100%;
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
`;

export const SearchDiv = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
