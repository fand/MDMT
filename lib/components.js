import React from "react";
import NextLink from 'next/link';
import Router from 'next/router';
import Highlight, { defaultProps } from "prism-react-renderer";
import { prefixUrl } from './utils';

export const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";
  const code = children.trim();

  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export const Img = (props) => {
  const newProps = {
    ...props,
    src: prefixUrl(props.src),
  };
  return <img {...newProps} />;
};

export const Link = (props) => {
  let newProps = {
    ...props,
    href: prefixUrl(props.href),
  };
  return <NextLink {...newProps} />
}
