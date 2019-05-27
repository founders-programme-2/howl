import styled from 'styled-components';
import responsiveSizes from '../../../constants/responsiveSizes';

const { MDM } = responsiveSizes;

export const AttachImg = styled.img``;

export const Message = styled.span`
  color: var(--highlight-color);
  font-weight: bold;
  margin: 10px;
`;

export const CntrDiv = styled.div`
  @media (max-width: ${MDM}) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;
