import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    
    a {
        color: inherit;
        text-decoration: none;
    }
`;
