import styled from 'styled-components';

const Article = styled.article`
  padding: 1rem 0;
  margin: 1rem 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  &:hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

const HeaderFour = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-variant: small-caps;
  line-height: 1.5rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  margin: 2rem 2rem 0;
  display: inline;
  margin-right: 0;
  font-weight: 600;
`;

const DetailsHeader = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-variant: small-caps;
  line-height: 1.5rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  display: inline;
  font-weight: 600;
`;

const DetailsPara = styled.p`

  margin-top: 0;
  margin:bottom:0
`;

const Para = styled.p`
  display: inline;
  margin: 0;
  margin-left: 0.5rem;
`;

export { Article, HeaderFour, Para, DetailsHeader, DetailsPara };
