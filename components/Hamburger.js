import { Arrow } from "react-burgers";
import styled from "styled-components";
import constants from './constants';

// Just a wrapper for react-burgers
export default ({ active, onClick }) => (
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
