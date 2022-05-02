import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --black: #101010;
        --dark-gray: #202020;
        --light-gray: #BBBBBB;
        --white: #F5F5F5;
        --yellow: #FFF066
    }

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{  
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
      }

    body {
        background-color: var(--black);
        color: var(--white);
    }

    button:hover {
        cursor: pointer;
    }

`;

export default GlobalStyles;
