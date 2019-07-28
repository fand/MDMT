import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import constants from "./constants";
import { AppContext, DispatchContext } from "../lib/context";
import * as config from "../config";
import { useLanguage } from '../lib/hooks';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 10px 30px 100px;
  background: rgba(10, 10, 10, 0.6);
  border-right: 1px solid gray;

  overflow: auto;
  -webkit-overflow-scrolling: touch;

  * {
    color: ${constants.fg};
    text-shadow: 0 2px 5px black !important;
  }
  ul {
    padding-left: 0;
    margin: 0;
  }
  li {
    line-height: 2.5em;
    &.active {
      position: relative;
      text-decoration: none;
      font-weight: bold;
      font-style: italic;
      color: white;
    }
  }
  li a {
    display: block;
    text-decoration: none;
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

const Li = ({ to, children, route }) => {
  if (isActive(route, to)) {
    return <li className="active">{children}</li>;
  }

  const dispatch = useContext(DispatchContext);
  const hideMenu = () => dispatch({ type: "hideMenu" });

  return (
    <li onClick={hideMenu} onMouseOver={prefetch(to)}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

const renderSidebarItems = (items, route, indent) => {
  return (
    <ul style={{ textIndent: indent * 30 }}>
      {items.map(([label, content]) => {
        if (typeof content === "string") {
          return (
            <Li key={content} route={route} to={content}>
              {label}
            </Li>
          );
        } else {
          return (
            <li key={label}>
              <span>{label}</span>
              {renderSidebarItems(content, route, indent + 1)}
            </li>
          );
        }
      })}
    </ul>
  );
};

const Sidebar = props => {
  const router = useRouter();
  const lang = useLanguage();
  const sidebarItems = config.sidebar[lang];

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

      {renderSidebarItems(sidebarItems, router.pathname, 0)}
    </Nav>
  );
};

export default Sidebar;
