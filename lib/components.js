import React, { useEffect } from "react";
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Highlight, { defaultProps } from "prism-react-renderer";
import { prefixUrl } from './utils';

// MDX component for syntax highlighting.
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

// Rewrites image source URL with assetPrefix.
export const Img = (props) => {
  const newProps = {
    ...props,
    src: prefixUrl(props.src),
  };
  return <img {...newProps} />;
};

// This component fixes prefetch behavior with assetPrefix.
// if `prefetch` prop is passed, it prefetches the link when this component is mounted.
// Otherwise, it prefetches the link on mouseover.
export const Link = (props) => {
  const router = useRouter();
  let newProps = {
    ...props,
    href: prefixUrl(props.href),
    onClick: (e) => {
      router.push(props.href, prefixUrl(props.href));
      e.preventDefault();
      e.stopPropagation();
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

  return <>
    <a {...newProps}/>
  </>;
}
