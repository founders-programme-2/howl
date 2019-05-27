import styled from 'styled-components';
import { createMuiTheme } from '../muIndex';
import responsiveSizes from '../../constants/responsiveSizes';

const { MDM } = responsiveSizes;

const FormTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#C02700',
    },
    secondary: {
      main: '#C02700',
    },
  },
});

const ErrMsg = styled.p`
  color: red;
  font-weight: bold;
`;

const FormMsg = styled.p`
  color: green;
  font-weight: bold;
`;

const CntrForm = styled.form`
  @media (max-width: ${MDM}) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export { FormTheme, ErrMsg, FormMsg, CntrForm };
