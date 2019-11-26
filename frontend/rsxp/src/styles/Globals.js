import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }
`;

export default globalStyles;