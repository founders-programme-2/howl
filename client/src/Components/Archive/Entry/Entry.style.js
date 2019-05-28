import styled from 'styled-components';
import responsiveSizes from '../../../constants/responsiveSizes';

const { SML } = responsiveSizes;

const Article = styled.article`
  padding: 1rem 0;
  margin: 5% 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 4px 4px 4px 4px rgba(246, 194, 91, 0.5);
  }
`;

const HeaderFour = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-variant: small-caps;
  line-height: 1.5rem;
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  display: inline;
  margin-right: 0;
  font-weight: 600;
`;

const Title = styled.h3`
  @media (max-width: ${SML}) {
    text-align: center;
     margin: 2rem auto
     width: 100%;
  }
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
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
`;

const TagsPara = styled.p`
  display: block;
  text-align: left;
  margin-top: 0;
  margin-bottom: 0;
`;

const Para = styled.p`
  display: inline;
  margin: 0;
  margin-left: 0.5rem;
`;
const Section = styled.section`
  margin: auto;
  width: 100%;
`;

export {
  Article,
  HeaderFour,
  Para,
  DetailsHeader,
  DetailsPara,
  TagsPara,
  Section,
  Title,
};
