import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Highlight, { defaultProps } from "prism-react-renderer";
import { prefixUrl } from "./utils";

interface CodeBlockProps {
    className: string;
    children: string;
}

// MDX component for syntax highlighting.
export const CodeBlock = ({
    children,
    className
}: CodeBlockProps): React.ReactElement => {
    // eslint-disable-next-line
    const language = (className ? className.replace(/language-/, "") : "") as any;
    const code = children.trim();

    const lineStyle = {
        padding: "0 20px"
    };

    return (
        <Highlight {...defaultProps} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div
                    className={className}
                    style={{ ...style, padding: "20px 0" }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            <span style={lineStyle}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </Highlight>
    );
};

interface ImgProps {
    src: string;
    alt: string;
    height?: string;
    className?: string;
}

// Rewrites image source URL with assetPrefix.
export const Img = (props: ImgProps): React.ReactElement => {
    const newProps = {
        ...props,
        src: prefixUrl(props.src)
    };
    return <img {...newProps} />;
};

interface LinkProps extends React.ComponentProps<"a"> {
    href: string;
    prefetch?: boolean;
    children?: React.ReactChild;
}

// This component fixes prefetch behavior with assetPrefix.
// if `prefetch` prop is passed, it prefetches the link when this component is mounted.
// Otherwise, it prefetches the link on mouseover.
export const Link = (props: LinkProps): React.ReactElement => {
    // Return normal anchor if the URL is external link
    if (props.href.match(/^https?:\/\//)) {
        return (
            <a
                key={props.href}
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
            </a>
        );
    }

    const router = useRouter();
    let newProps = {
        children: props.children,
        href: prefixUrl(props.href),
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            router.push(props.href, prefixUrl(props.href));
            e.preventDefault();
        },
        onMouseOver: () => {
            router.prefetch(prefixUrl(props.href));
        }
    };

    if (props.prefetch) {
        useEffect(() => {
            router.prefetch(prefixUrl(props.href));
        }, []);
    }

    return <a {...newProps} />;
};
