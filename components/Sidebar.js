import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import LazyLoad from "react-lazyload";
import constants from "./constants";
import { AppContext, DispatchContext } from "../lib/context";
import * as config from '../config';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  -webkit-overflow-scrolling: touch;
  @media (max-width: ${constants.mobile}px) {
    width: 82vw;
  }

  padding: 10px 20px 100px;
  background: rgba(10, 10, 10, 0.6);
  border-right: 1px solid rgb(24, 26, 31);
  text-shadow: 0 2px 5px black;
  overflow: auto;
  * {
    font-weight: 400;
  }
  h4 {
    margin: 1em 0 0;
    font-weight: 700;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    display: block;
    width: 100%;
    line-height: 2.5em;
    &.active {
      box-shadow: -200px 0 0 black, 200px 0 0 black;
      background: black;
      * {
        font-weight: 700;
      }
    }
  }
  li a {
    display: block;
    text-decoration: none;
    color: ${constants.fg};
    &:hover {
      color: ${constants.link};
      text-decoration: underline;
    }
    &:visited {
      color: ${constants.fg};
    }
  }
`;

const Header = styled.div`
  margin-bottom: 30px;
  .logo {
    width: 100%;
    padding: 5px 10px;
    margin-left: -10px;
    a {
      display: block;
    }
  }
  .banners {
    width: 180px;
    margin: 20px auto;
    transform: translateX(-5px);
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
    }
  }
`;

const isActive = (path, to) => {
  const match = (to || "").match(/^([^#?]*)\??([^#]*)#?(.*)$/);
  return !!match && match.length > 0 && path === match[1];
};

const prefetch = to => () => Router.prefetch(to);

const Li = ({ to, children }) => {
  // const { path } = this.props;

  // if (isActive(path, to)) {
  //   return (
  //     <li className="active" onClick={this.hideMenu}>
  //       {children}
  //     </li>
  //   );
  // }

  const state = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const toggleMenu = () => dispatch({ type: "toggleMenu" });

  return (
    <li onClick={toggleMenu} onMouseOver={prefetch(to)}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const renderSidebarItems = (items, indent) => {
  return (
    <ul style={{ textIndent: indent * 20 }}>
      {items.map(([label, content]) => {
        if (typeof content === 'string') {
          return <Li key={content} to={content}>{label}</Li>
        } else {
          return (
            <li key={label}>
              <span>{label}</span>
              {renderSidebarItems(content, indent + 1)}
            </li>
          );
        }
      })}
    </ul>
  );
};


const Sidebar = props => {
  const { lang } = props;

  const sidebarItems = config.sidebar.en;

  return (
    <Nav>
      <Header>
        <Link href="/">
          <a>
            <img
              className="logo"
              src="/static/images/logo_header.png"
              alt="MDMX header"
            />
          </a>
        </Link>
        <a
          className="twitter"
          target="\_blank"
          href="https://twitter.com/search?f=tweets&q=%23mdmx&src=typd"
        >
          <img alt="hashtag #vedajs" src="/static/images/hashtag.png" />
        </a>
      </Header>

      {renderSidebarItems(sidebarItems, 0)}
    </Nav>
  );
};

export default Sidebar;
