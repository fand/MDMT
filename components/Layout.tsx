import React, { useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import throttle from "lodash.throttle";
import styled from "styled-components";
import { AppContext } from "../lib/context";
import constants from "./constants";
import Meta from "./Meta";
import ServiceWorker from "./ServiceWorker";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";

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
    width: ${constants.sidebarWidth}px;
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
    display: flex;
    flex-direction: column;
`;

const Main = styled.main`
    flex: 1;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
`;

const HeaderWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
`;

interface LayoutProps {
    children: React.ReactChild;
}

const Layout = (props: LayoutProps): React.ReactElement => {
    const { state, frontmatter, dispatch } = useContext(AppContext);
    const bodyEl = useRef<HTMLDivElement>(null);

    // Scroll to top on route change
    const router = useRouter();
    useEffect(() => {
        // eslint-disable-next-line
        (window as any).requestIdleCallback(() => {
            const body = bodyEl.current;
            if (body) {
                body.scrollTop = 0;
            }
        });
    }, [router]);

    // Hide header on top
    const watchScroll = throttle(() => {
        const body = bodyEl.current;
        if (body) {
            if (body.scrollTop > 100) {
                dispatch({ type: "showHeader" });
            } else {
                dispatch({ type: "hideHeader" });
            }
        }
    }, 50);

    useEffect(() => {
        // eslint-disable-next-line
            (window as any).requestIdleCallback(() => {
            const body = bodyEl.current;
            if (body) {
                body.addEventListener("scroll", watchScroll);
                watchScroll();
            }
        });

        return () => {
            const body = bodyEl.current;
            body && body.removeEventListener("scroll", watchScroll);
        };
    }, []);

    const sc = state.isMenuVisible ? "menu" : "";

    return (
        <div>
            <Meta />
            <ServiceWorker />
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
                        <Footer />
                    </MainWrapper>
                </BodyColumn>
            </Wrapper>
            <Background color={frontmatter.color} />
        </div>
    );
};

export default Layout;
