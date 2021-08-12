import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        --primary-basic-color: rgb(255, 90, 95);
        --primary-light-color: rgb(255, 150, 154);

        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        box-sizing: boerder-box;
    }

    html {
        font-size: 16px;
    }

    html, body, .root {
        height: 100%;
    }

    body {
        font-family: 'Gugi';
    }
`;
