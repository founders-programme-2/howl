import styled from 'styled-components';
import responsiveSizes from '../../constants/responsiveSizes';

const { SML, MDM } = responsiveSizes;

const Simg = styled.img`
  border-radius: 20px;
  max-width: 30%;
  float: right;
  margin: 0 2rem 2rem;

  @media (max-width: ${MDM}) {
    max-width: 50%;
    margin: 2rem;
  }

  @media (max-width: ${SML}) {
    max-width: 50%;
    margin: 2rem;
  }
`;

export default Simg;
