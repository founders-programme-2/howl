import styled from 'styled-components';

const Picture = styled.img`
  width: 70%;
  margin: 2rem auto;
`;

const ImgFigure = styled.figure`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 2rem auto;
`;

const FigCap = styled.figcaption`
  width: 80%;
  margin: 0 auto;
`;

export { Picture, ImgFigure, FigCap };
