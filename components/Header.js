import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import constants from "./constants";
import { AppContext, DispatchContext } from "../lib/context";

const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  line-height: 56px;
  transition: 0.5s;
  background: transparent;
  .mobile {
    display: none;
  }
  @media (max-width: ${constants.mobile}px) {
    &.visible {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 30, 1),
        rgba(0, 0, 30, 0.5)
      );
    }
    .mobile {
      display: block;
    }
    .pc {
      display: none;
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

  a,
  img {
    display: block;
    height: 100%;
    text-decoration: none;
  }
  img {
    margin-left: -10px;
  }
`;

const Left = styled.div`
  position: absolute;
  left: 0;
`;
const Right = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;
const Button = styled.div`
  cursor: pointer;
  color: #ddd;
  user-select: none;
  & > img {
    display: block;
    width: 56px;
    height: 56px;
    padding: 15px;
    font-size: 24px;
    line-height: 27px;
  }
  span {
    padding: 15px;
    position: relative;
    display: block;
    top: -1em;
  }
  &:hover {
    opacity: 1;
    color: #fff;
  }

  .inner {
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }
    i {
      margin-right: 10px;
      text-align: center;
    }
    display: none;
    opacity: 0;
    transition: opacity 0.5s;
    &.visible {
      width: 180px;
      display: block;
      opacity: 1;
    }
    &:before {
      content: "";
      position: absolute;
      top: -30px;
      right: 12px;
      border: 15px solid transparent;
      border-bottom: 15px solid black;
    }
  }
`;

const Header = (props) => {
  const state = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const toggleMenu = () => dispatch({ type: 'toggleMenu' });
  const toggleLanguage = () => dispatch({ type: 'toggleLanguage' });

  const cls = state.isHeaderVisible ? "visible" : "";

  // const { lang } = props;
  const lang = 'en';

  return (
    <Nav className={cls}>
      <Logo className={cls}>
        <Link href={lang === "en" ? "/" : `/?lang=${lang}`}>
          <a>
            <img src="/static/images/logo_header.png" alt="VEDA logo" />
          </a>
        </Link>
      </Logo>

      <Left>
        <Button className="mobile" onClick={toggleMenu}>
          <img src="/static/images/i_menu.png" alt="Menu" />
        </Button>
      </Left>
      <Right>
        {props.i18n && (
          <Button onClick={toggleLanguage}>
            {lang === "en" && <span>日本語</span>}
            {lang === "ja" && <span>English</span>}
          </Button>
        )}
      </Right>
    </Nav>
  );
};

export default Header;
