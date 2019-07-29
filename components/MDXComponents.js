import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nextConfig from '../next.config.js';

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
  const newProps = { ...props };

  // Convert root-relative URLs
  const m = props.src.match(/^\/(.*)$/)
  if (m) {
    const prefix = nextConfig.assetPrefix;
    newProps.src = `${prefix}/${m[1]}`;
  }

  return <img {...newProps} />;
};
