import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { opacify } from 'polished';
import { AppContext, DispatchContext } from "../lib/context";
import constants from "./constants";
import Hamburger from './hamburger';
import Language from './Language';

const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;

  ${'' /* // animation */}
  transition: 0.5s;
  background: transparent;
  @media (max-width: ${constants.mobile}px) {
    &.visible {
      background: linear-gradient(
        to bottom,
        ${p => opacify(1, p.color)},
        ${p => p.color}
      );
    }
  }
`;

const Logo = styled.div`
  height: 100%;
  padding: 4px 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
  @media (max-width: ${constants.mobile}px) {
    transition: opacity 1s;
    &.visible {
      opacity: 1;
    }
  }
`;

const Left = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* left: 0; */}
`;

const Right = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* display: flex; */}
  ${'' /* right: 0; */}
`;

const Header = (props) => {
  const state = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const toggleMenu = () => dispatch({ type: 'toggleMenu' });

  const cls = state.isHeaderVisible ? "visible" : "";

  // const { lang } = state;
  const { lang } = 'en';

  return (
    <Nav className={cls} color={state.color}>
      <Logo className={cls}>
        <Link href={lang === "en" ? "/" : `/?lang=${lang}`}>
          <a>
            <img src="/static/images/logo_header.png" alt="VEDA logo" />
          </a>
        </Link>
      </Logo>

      <Left className="mobile">
        <Hamburger active={state.isMenuVisible} onClick={toggleMenu} />
      </Left>
      <Right>
        <Language lang={lang}/>
      </Right>
    </Nav>
  );
};

export default Header;
