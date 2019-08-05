import React, { useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { opacify } from "polished";
import { AppContext } from "../lib/context";
import { useLanguage } from "../lib/hooks";
import { getPathForLang, getPurePath } from "../lib/utils";
import { Link, Img } from "../lib/components";
import config from "../lib/config";
import constants from "./constants";
import Hamburger from "./Hamburger";
import Language from "./Language";

const Nav = styled.div<{ visible: boolean; color: string }>`
    position: relative;
    width: 100%;
    height: ${constants.headerHeight}px;
    display: flex;
    justify-content: space-between;

    // Set background on mobile
    transition: 0.3s;
    background: transparent;
    @media (max-width: ${constants.mobile}px) {
        background: ${p => (p.visible ? opacify(1, p.color) : "transparent")};}
    }
`;

const PCOnly = styled.div`
    display: block;
    @media (max-width: ${constants.mobile}px) {
        display: none;
    }
`;

const MobileOnly = styled.div`
    display: none;
    @media (max-width: ${constants.mobile}px) {
        display: block;
    }
`;

const Logo = styled.div<{ visible: boolean }>`
    height: 100%;
    padding: 4px 0;
    position: absolute;
    left: 51%;
    transform: translateX(-50%);

    transition: opacity 0.3s;
    opacity: 0;
    @media (max-width: ${constants.mobile}px) {
        opacity: ${p => (p.visible ? "1" : "0")};
    }
`;

const Left = styled.div``;

const Right = styled.div`
    display: flex;
    line-height: ${constants.headerHeight}px;

    /* Margin to avoid scroll bar */
    margin-right: 8px;
    @media (max-width: ${constants.mobile}px) {
        margin-right: 0;
    }

    .header-link a {
        line-height: ${constants.headerHeight}px;
        text-decoration: none;
        color: ${constants.fg};
        font-weight: bold;
        margin: 0 8px;
    }
`;

const Header = (): React.ReactElement => {
    const { state, dispatch, frontmatter } = useContext(AppContext);

    const toggleMenu = (): void =>
        dispatch({ type: state.isMenuVisible ? "hideMenu" : "showMenu" });

    // Get config for header links
    const lang = useLanguage();
    const headerItemsConfig = config.header[lang];

    // Get current page is root or not
    const router = useRouter();
    const realPath = getPurePath(router.asPath, lang);
    const isRoot = realPath === "/";

    const isNavVisible = state.isHeaderVisible;
    const isLogoVisible = state.isHeaderVisible || !isRoot;

    return (
        <Nav visible={isNavVisible} color={frontmatter.color}>
            <Logo visible={isLogoVisible}>
                <Link href={getPathForLang(lang, "/")}>
                    <Img
                        src="/static/images/logo_white.png"
                        alt="MDMT logo"
                        height="48"
                    />
                </Link>
            </Logo>

            <Left>
                <MobileOnly>
                    <Hamburger
                        active={state.isMenuVisible}
                        onClick={toggleMenu}
                    />
                </MobileOnly>
            </Left>
            <Right>
                {headerItemsConfig.map(([label, url]) => (
                    <PCOnly key={url}>
                        <span className="header-link">
                            <Link href={url}>{label}</Link>
                        </span>
                    </PCOnly>
                ))}
                <Language />
            </Right>
        </Nav>
    );
};

export default Header;
