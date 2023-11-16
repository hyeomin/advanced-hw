import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;600;700&display=swap');

    body {
        font-family: "Noto Sans KR", serif;
        line-height: 1.5;
    }
`;

export default GlobalStyle;
