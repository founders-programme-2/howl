import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    // import google fonts - Raleway (400/regular, 800, 900) and Roboto (regular)
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,800,900|Roboto');
    
    :root {
        --main-bg-color: #FFFBF0; 
        --main-font-color: #0A0A0A;
        --secondary-font-color: #FFFFFF;
        --main-btn-color: #F6C25B;
        --highlight-color: #C02700;
    }

    body {
        background-color: var(--main-bg-color);
        color:  var(--main-font-color);
    }

    // for main content of each page outside of footer and header
    main {
        max-width: 80%;
        margin: 0 auto;
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

    button {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
        background: var(--main-btn-color);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 0.8rem;
        margin: 0.4rem;
    }
`;
