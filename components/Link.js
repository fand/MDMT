import Link from 'next/link';
import nextConfig from '../next.config.js';

export default (props) => {
  let newProps = props;

  // Convert root-relative URLs
  const m = props.href.match(/^\/(.*)$/)
  if (m) {
    newProps = { ...props };
    const prefix = nextConfig.assetPrefix;
    newProps.href = `${prefix}/${m[1]}`;
  }

  return <Link {...newProps} />
}
