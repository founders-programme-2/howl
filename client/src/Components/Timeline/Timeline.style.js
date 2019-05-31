import styled from 'styled-components';

import responsiveSizes from '../../constants/responsiveSizes';

const { SML } = responsiveSizes;

const Picture = styled.img`
  width: 70%;
  margin: 2rem auto;
  @media (max-width: ${SML}) {
    width: 100%;
  }
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
  @media (max-width: ${SML}) {
    width: 100%;
  }
`;

export { Picture, ImgFigure, FigCap };
