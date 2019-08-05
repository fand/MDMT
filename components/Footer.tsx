import React from "react";
import styled from "styled-components";
import { Link } from "../lib/components";

const FooterEl = styled.footer`
    width: 90%;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
`;

const Hr = styled.hr`
    margin: 60px auto 0;
`;

const FooterText = styled.div`
    margin: 30px auto;
`;

const Footer = (): React.ReactElement => (
    <FooterEl>
        <Hr />
        <FooterText>
            {"MDMT by "}
            <Link href="https://twitter.com/amagitakayosi">@amagitakayosi</Link>
        </FooterText>
    </FooterEl>
);

export default Footer;
