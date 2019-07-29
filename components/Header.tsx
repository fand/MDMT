import React, { useContext, Dispatch } from "react";
import styled from "styled-components";
import { opacify } from "polished";
import { AppContext, DispatchContext } from "../lib/context";
import { AppState, Action } from "../lib/reducer";
import constants from "./constants";
import Hamburger from "./hamburger";
import Language from "./Language";
import { useLanguage } from "../lib/hooks";
import { getPathForLang } from "../lib/utils";
import { Link, Img } from "../lib/components";

const Nav = styled.div<{ color: string }>`
  position: relative;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;

  transition: 0.5s;
  background: transparent;
  @media (max-width: ${constants.mobile}px) {
    &.visible {
      background: ${p => opacify(1, p.color)};
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

const Left = styled.div``;

const Right = styled.div``;

const Header = (): React.ReactElement => {
  const state = useContext(AppContext) as AppState;
  const dispatch = useContext(DispatchContext) as Dispatch<Action>;

  const toggleMenu = (): void =>
    dispatch({ type: state.isMenuVisible ? "hideMenu" : "showMenu" });

  const cls = state.isHeaderVisible ? "visible" : "";

  const lang = useLanguage();

  return (
    <Nav className={cls} color={state.color}>
      <Logo className={cls}>
        <Link href={getPathForLang(lang, "/")}>
          <Img
            src="/static/images/logo_white.png"
            alt="MDMT logo"
            height="48"
          />
        </Link>
      </Logo>

      <Left className="mobile">
        <Hamburger active={state.isMenuVisible} onClick={toggleMenu} />
      </Left>
      <Right>
        <Language />
      </Right>
    </Nav>
  );
};

export default Header;
