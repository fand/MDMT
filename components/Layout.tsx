import React, { useEffect, useContext, useRef, Dispatch } from "react";
import throttle from "lodash.throttle";
import styled, { createGlobalStyle } from "styled-components";
import constants from "./constants";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Meta from "./Meta";
import Background from "./Background";
import { AppContext, DispatchContext } from "../lib/context";
import { AppState, Action } from "../lib/store";

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
        left: -75vw;
        &.menu {
            left: 0;
        }
    }
`;

const SidebarWrapper = styled.div`
    width: 270px;
    -webkit-overflow-scrolling: touch;
    @media (max-width: ${constants.mobile}px) {
        width: 75vw;
    }
`;

const BodyColumn = styled.div`
    flex: 1;
    position: relative;
    @media (max-width: ${constants.mobile}px) {
        width: 100vw;
    }
`;

const MainWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 20px;
    padding-top: 60px; /* Header height + padding */
    padding-bottom: 80px;
`;

const Main = styled.main`
    max-width: 720px;
    margin: 0 auto;
`;

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`;

// Patch for prism
const GlobalStyle = createGlobalStyle`
  .prism-code {
    overflow-x: auto;
  }
`;

interface LayoutProps {
    children: React.ReactChild;
}

const Layout = (props: LayoutProps): React.ReactElement => {
    const state = useContext(AppContext) as AppState;
    const dispatch = useContext(DispatchContext) as Dispatch<Action>;
    const bodyEl = useRef<HTMLDivElement>(null);

    const watchScroll = throttle(() => {
        const body = bodyEl.current;
        if (body) {
            if (body.scrollTop > 100) {
                dispatch({ type: "showHeader" });
            } else {
                dispatch({ type: "hideHeader" });
            }
        }
    }, 100);

    useEffect(() => {
        const body = bodyEl.current;
        if (body) {
            body.addEventListener("scroll", watchScroll);
            // watchScroll();
        }

        return () => {
            const body = bodyEl.current;
            body && body.removeEventListener("scroll", watchScroll);
        };
    }, []);

    const sc = state.isMenuVisible ? "menu" : "";

    return (
        <div>
            <Meta />
            <GlobalStyle />
            <Wrapper className={sc}>
                <SidebarWrapper className={sc}>
                    <Sidebar />
                </SidebarWrapper>
                <BodyColumn>
                    <HeaderWrapper>
                        <Header />
                    </HeaderWrapper>
                    <MainWrapper ref={bodyEl} className="body">
                        <Main>{props.children}</Main>
                    </MainWrapper>
                </BodyColumn>
            </Wrapper>
            <Background color={state.color} />
        </div>
    );
};

export default Layout;
