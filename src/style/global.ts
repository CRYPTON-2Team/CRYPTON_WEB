import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;

        font-family: "Pretendard";
        color: #000;
        letter-spacing: -0.5px;
    }
    a {
        color: #000;
        text-decoration: none;
    }
`;
