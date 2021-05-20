import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
    }

    body {
        background-color: #333;
    }
`;


export default GlobalStyle;