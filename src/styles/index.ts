import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.background};
    }
`