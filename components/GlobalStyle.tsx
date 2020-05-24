import sanitize from "../lib/sanitize";
import constants from "./constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    ${sanitize}

    /* Fix for Prism syntax highlight styles */
    .prism-code {
        overflow-x: auto;
    }
    code {
        padding: 3px 8px;
        background: ${constants.bg};
        color: ${constants.fg};
        border-radius: 3px;
        white-space: nowrap;
    }

    /* Set global font */
    * {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
        line-height: 1.8em;
    }
`;

export default GlobalStyle;
