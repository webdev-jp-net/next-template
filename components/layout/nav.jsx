import Link from 'next/link';
export default () => (
  <nav className="l-nav">
    <ul>
      <li>
        <Link href="/">
          <a>index</a>
        </Link>
      </li>
      <li>
        <Link href="/other">
          <a>other</a>
        </Link>
      </li>
    </ul>
  </nav>
);
