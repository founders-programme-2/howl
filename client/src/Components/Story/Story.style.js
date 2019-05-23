import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
  margin: 2rem 2rem;
`;

const Para = styled.p`
  display: inline;
  margin-left: 0.5rem;
`;

const HeaderFour = styled.h4`
  display: inline;
  margin-right: 0;
  font-weight: 600;
`;

const DetailsHeader = styled.h4`
  font-weight: 600;
`;

const PostImg = styled.img`
  width: 80%;
  margin: 2rem auto 1rem;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ImgFigure = styled.figure`
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;

const TextContainer = styled.article`
  width: 60%;
`;

const FigCap = styled.figcaption`
  width: 80%;
  margin: 0 auto;
`;

export {
  Para,
  HeaderFour,
  PostImg,
  ContentContainer,
  TextContainer,
  ImgFigure,
  DetailsHeader,
  FigCap,
  Title,
};
