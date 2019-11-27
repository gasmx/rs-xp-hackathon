import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }

    html {
        scroll-behavior: smooth;
    }

    html, body, #root {
        height: 100%;
    }
`;

export default globalStyles;