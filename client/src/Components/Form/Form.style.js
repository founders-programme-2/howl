import styled from 'styled-components';
import { createMuiTheme } from '../muIndex';

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

export { FormTheme, ErrMsg, FormMsg };
