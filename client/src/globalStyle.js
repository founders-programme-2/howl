import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    // import google fonts - Raleway (400/regular, 800, 900) and Roboto (regular)
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,800,900|Roboto');
    
    body {

    }

    // titles   
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 3rem;
    }

    // subtitle
    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
        font-size: 2.5rem;
    }

    // nav, buttons etc
    h3 {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
    }
`;
