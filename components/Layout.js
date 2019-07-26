import React, { useEffect, useContext, useRef } from "react";
import { useRouter } from 'next/router'
import throttle from "lodash.throttle";
import styled from "styled-components";
import constants from "./constants";
import Sidebar from "./sidebar";
import Header from "./header";
import Meta from "./meta";
import Background from "./background";
import { AppContext, DispatchContext } from "../lib/context";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  overflow: visible;
  display: flex;

  transition: left 0.3s;
  @media (max-width: ${constants.mobile}px) {
    width: auto;
    left: -100vw;
    &.menu {
      left: 0;
    }
  }
`;

const SidebarWrapper = styled.div`
  width: 270px;
  -webkit-overflow-scrolling: touch;
  @media (max-width: ${constants.mobile}px) {
    width: 100vw;
  }
`;

const BodyColumn = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: ${constants.mobile}px) {
    width: 100vw;
  }
`;

const MainWrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px;
  padding-top: 60px; /* Header height + padding */
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Layout = (props) => {
  const state = useContext(AppContext);
  const dispatch = useContext(DispatchContext);
  const bodyEl = useRef(null);

  const watchScroll = throttle(() => {
    if (bodyEl.current.scrollTop > 100) {
      dispatch({ type: 'showHeader' });
    } else {
      dispatch({ type: 'hideHeader' });
    }
  }, 100);

  useEffect(() => {
    bodyEl.current.addEventListener("scroll", watchScroll);
    // watchScroll();

    return () => {
      bodyEl.current.removeEventListener("scroll", watchScroll);
    }
  }, []);


  const router = useRouter();
  const path = router.pathname;

  const sc = state.isMenuVisible ? "menu" : "";

  return (
    <div>
      <Meta />
      <Wrapper className={sc}>
        <SidebarWrapper className={sc}>
          <Sidebar path={path} />
        </SidebarWrapper>
        <BodyColumn>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <MainWrapper ref={bodyEl} className="body">
            {props.children}
          </MainWrapper>
        </BodyColumn>
      </Wrapper>
      <Background color={state.color} />
    </div>
  );
};

export default Layout;
