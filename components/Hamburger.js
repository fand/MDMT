import React from "react";
import PropTypes from "prop-types";
import { Arrow } from "react-burgers";
import constants from "./constants";

// Just a wrapper for react-burgers
const Hamburger = ({ active, onClick }) => (
  <Arrow
    width={32}
    active={active}
    onClick={onClick}
    borderRadius={2}
    lineSpacing={4}
    color={constants.fg}
    padding="18px"
  />
);

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Hamburger;
