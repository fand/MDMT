import React, { useContext } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import constants from "./constants";
import { AppContext, DispatchContext } from "../lib/context";
import * as config from "../config";
import { useLanguage } from "../lib/hooks";
import { Link, Img } from "../lib/components";
import { removePrefixFromPath } from "../lib/utils";

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
  text-align: center;

  .logo {
    width: 100%;
    padding: 20px 0;
  }
  .twitter {
    display: block;
    margin: 10px auto;
    img {
      height: 24px;
    }
  }
`;

const isActive = (path, to) => {
  const match = (to || "").match(/^([^#?]*)\??([^#]*)#?(.*)$/);
  return !!match && match.length > 0 && path === match[1];
};

const prefetch = to => () => {
  console.log('>> Sidebar prefetch', to);
  Router.prefetch(removePrefixFromPath(to))
};

const Li = ({ to, children, route }) => {
  if (isActive(route, to)) {
    return <li className="active">{children}</li>;
  }

  const dispatch = useContext(DispatchContext);
  const hideMenu = () => dispatch({ type: "hideMenu" });

  return (
    <li onClick={hideMenu} onMouseOver={prefetch(to)}>
      <Link href={to}>
        {children}
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
          <Img
            className="logo"
            src="/static/images/logo_white.png"
            alt="MDMT header"
          />
        </Link>
        <a
          className="twitter"
          target="\_blank"
          href="https://twitter.com/search?f=tweets&q=%23MDMTjs&src=typd"
        >
          <Img
            alt="hashtag #MDMTjs"
            src="/static/images/hashtag.png"
          />
        </a>
      </Header>

      {renderSidebarItems(sidebarItems, router.pathname, 0)}
    </Nav>
  );
};

export default Sidebar;
