import Link from 'next/link';
import { prefixUrl } from '../lib/utils';

export default (props) => {
  let newProps = {
    ...props,
    href: prefixUrl(props.href),
  };
  return <Link {...newProps} />
}
