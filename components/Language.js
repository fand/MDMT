import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AppContext, DispatchContext } from "../lib/context";
import config from "../config";
import constants from "./constants";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: auto;
`;

const Button = styled.button`
  color: ${constants.fg};
  font-size: 27px;
  padding: 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Dropdown = styled.div`
  display: ${p => (p.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  background: ${constants.bg};

  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  ul {
    position: relative;
    z-index: 3;
    list-style: none;
    margin: 0;
    padding: 8px 20px;
    line-height: 2em;
    color: ${constants.fg};
  }
  li {
    white-space: nowrap;
  }
`;

const Language = () => {
  const state = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const [isActive, setActivity] = useState(false);

  const setLanguage = lang => dispatch({ type: "setLanguage", lang });
  const toggle = () => setActivity(!isActive);

  return (
    <Wrapper>
      <Button type="button" onClick={toggle}>
        <FontAwesomeIcon icon={faGlobe} />
      </Button>
      <Dropdown open={isActive}>
        <div className="bg" onClick={toggle} />
        <ul>
          {Object.entries(config.languages).map(([id, label]) => (
            <li key={id} onClick={() => setLanguage(id)}>
              {label}
            </li>
          ))}
        </ul>
      </Dropdown>
    </Wrapper>
  );
};

export default Language;
