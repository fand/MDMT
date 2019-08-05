import React from "react";
import constants from "./constants";
const { Arrow } = require("react-burgers"); // eslint-disable-line

interface HamburgerProps {
    active: boolean;
    onClick: Function;
}

// Just a wrapper for react-burgers
const Hamburger = ({ active, onClick }: HamburgerProps): React.ReactElement => (
    <Arrow
        width={32}
        active={active}
        onClick={onClick}
        borderRadius={2}
        lineSpacing={4}
        color={constants.fg}
        padding="18px"
        customProps={{ title: "Menu" }}
    />
);

export default Hamburger;
