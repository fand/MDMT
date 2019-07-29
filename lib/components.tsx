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
  const language = className ? className.replace(/language-/, "") : "";
  const code = children.trim();

  return (
    <Highlight {...defaultProps} code={code} language={language as any}>
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

interface ImgProps {
  src: string;
  alt: string;
  height: string;
}

// Rewrites image source URL with assetPrefix.
export const Img = (props: ImgProps): React.ReactElement => {
  const newProps = {
    ...props,
    src: prefixUrl(props.src)
  };
  return <img {...newProps} />;
};

interface LinkProps {
  href: string;
  prefetch?: boolean;
  children: any;
}

// This component fixes prefetch behavior with assetPrefix.
// if `prefetch` prop is passed, it prefetches the link when this component is mounted.
// Otherwise, it prefetches the link on mouseover.
export const Link = (props: LinkProps): React.ReactElement => {
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

  return (
    <>
      <a {...newProps} />
    </>
  );
};
