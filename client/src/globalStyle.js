import { createGlobalStyle } from 'styled-components';

import responsiveSizes from './constants/responsiveSizes';

const { SML, MDM } = responsiveSizes;

export default createGlobalStyle`

// import google fonts - Raleway (400/regular, 800, 900) and Roboto (regular, bold)
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,800,900|Roboto:400,700');
    

    :root {
        --main-bg-color: #FFFBF0; 
        --main-font-color: #0A0A0A;
        --secondary-font-color: #FFFFFF;
        --main-btn-color: #F6C25B;
        --highlight-color: #C02700;
        --secondary-bg-color: #000000;
        --responsive-large: 910px;
    }

    body {
        background-color: var(--main-bg-color);
        color:  var(--main-font-color);
        margin: 0;
    }

    // for main content of each page outside of footer and header
    main {
        max-width: 80%;
        margin: 0 auto;
        padding-left: 3rem;
        padding-bottom: 6rem;
    }

    header {
        margin: 4rem 2rem 2rem;
    }


    // titles   
    h1 {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 4rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }

    // subtitle
    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 800;
        font-size: 2rem;
        letter-spacing: 0.1rem;
        margin: 2rem 2rem 0;

    }

    // nav, buttons etc - probably not actually necessary here as nav and buttons are separate elements
    h3 {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-variant: small-caps;
        line-height: 1.5rem;
        text-transform: lowercase;
        letter-spacing: 0.1rem;
        font-size: 1.2rem;
        margin: 2rem 2rem;

    }

    a {
        color: var(--highlight-color);
        font-weight: 700;
    }

    button {
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
        font-size: 1.5rem;
        background: var(--main-btn-color);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 0.8rem;
        margin: 1rem;
    }

    figcaption {
        font-family: 'Roboto', sans-serif;
        font-variant: small-caps;
        text-transform: lowercase;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        margin: 0rem 2rem;
        text-align: center;
    }

    // media query for tablets
    @media screen and (max-width: ${MDM}) {
        main {
            padding: 0;
            max-width: 85%;
        }
        h1 {
            font-size: 3.5rem;
            text-align: center;
        }
        h2 {
            text-align: center;
        }
        p {
            text-align: center;
        }
    }

    // media query for mobile
    @media screen and (max-width: ${SML}) {
        main {
            max-width: 90%;
        }

        header {
            margin: 4rem 1rem 1rem;
        }

        h1 {
            font-size: 2.8rem;
        }
    }
`;
