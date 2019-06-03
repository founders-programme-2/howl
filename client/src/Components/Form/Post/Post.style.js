import styled from 'styled-components';
import responsiveSizes from '../../../constants/responsiveSizes';

const { MDM } = responsiveSizes;

const Message = styled.span`
  color: var(--highlight-color);
  font-weight: bold;
  margin: 10px;
`;

const ErrMsg = styled.p`
  color: red;
  font-weight: bold;
`;

const CntrDiv = styled.div`
  @media (max-width: ${MDM}) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export { Message, ErrMsg, CntrDiv };
