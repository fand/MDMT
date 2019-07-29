import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import getConfig from 'next/config';

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


  const m = props.src.match(/^\/(.*)$/)
  if (m) {
    const { assetPrefix } = getConfig();
    console.log(assetPrefix);
    newProps.src = `/${assetPrefix}/${m[1]}`;
  }

  return <img {...newProps} />;
};
