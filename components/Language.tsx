import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../lib/hooks";
import { Link } from "../lib/components";
import { getPathForLang, getPurePath } from "../lib/utils";
import config from "../lib/config";
import constants from "./constants";

const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: auto;
`;

const Button = styled.button`
    color: ${constants.fg};
    font-size: 32px;
    line-height: 32px;
    padding: 12px 15px;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    &:hover {
        opacity: 0.8;
    }
`;

const Dropdown = styled.div<{ open: boolean }>`
    display: ${p => (p.open ? "block" : "none")};
    position: absolute;
    top: calc(100% + 8px);
    right: 8px;
    background: ${constants.bg};

    .bg {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
    }

    ul {
        position: relative;
        z-index: 3;
        list-style: none;
        margin: 0 8px;
        padding: 10px 20px;
        line-height: 2em;
        text-align: center;
        color: ${constants.fg};
    }
    li {
        position: relative;
        white-space: nowrap;
        &.is-active:before {
            content: "";
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-color: transparent transparent transparent ${constants.fg};
            position: absolute;
            left: -16px;
            top: 10px;
        }
    }

    a,
    a:visited {
        color: ${constants.fg};
    }
`;

const Language = (): React.ReactElement => {
    const [isActive, setActivity] = useState(false);

    const hide = (): void => setActivity(false);
    const toggle = (): void => setActivity(!isActive);

    const lang = useLanguage();

    // Create urls for translation
    const router = useRouter();
    const path = getPurePath(router.asPath, lang);

    const createLangUrl = (langId: string): string =>
        getPathForLang(langId, path);

    return (
        <Wrapper>
            <Button type="button" title="Change language" onClick={toggle}>
                <FontAwesomeIcon icon={faGlobe} />
            </Button>
            <Dropdown open={isActive}>
                <div className="bg" onClick={hide} />
                <ul>
                    {Object.entries(config.languages).map(([langId, label]) =>
                        langId === lang ? (
                            <li key={langId} className="is-active">
                                {label}
                            </li>
                        ) : (
                            <li key={langId} onClick={hide}>
                                <Link href={createLangUrl(langId)}>
                                    {label}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </Dropdown>
        </Wrapper>
    );
};

export default Language;
