import * as React from "react";
import styled from "styled-components";
import { lighten, adjustHue } from "polished";

const BG = styled.div<{ color: string }>`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    left: 0;
    top: 0;

    /* animation */
    background: repeating-linear-gradient(
        130deg,
        ${p => adjustHue(90, p.color)},
        ${p => p.color},
        ${p => lighten(0.2, adjustHue(-60, p.color))}
    );
    background-size: 200% 200%;
    animation: bg 12s ease infinite;
    @keyframes bg {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0 0;
        }
    }
`;

interface BackgroundProps {
    color: string;
}

const Background = ({ color }: BackgroundProps): React.ReactElement => {
    return <BG color={color} />;
};

export default Background;
