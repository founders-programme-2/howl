import styled from 'styled-components';
import { createMuiTheme } from '../muIndex';
import responsiveSizes from '../../constants/responsiveSizes';

const { MDM } = responsiveSizes;

export const FormTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#C02700',
    },
    secondary: {
      main: '#C02700',
    },
  },
});

export const CntrForm = styled.form`
  @media (max-width: ${MDM}) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;
