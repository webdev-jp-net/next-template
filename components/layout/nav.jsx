import { withRouter } from 'next/router';
import Link from 'next/link';
export default withRouter(({ router }) => {
  const paths = [
    {
      id: 'index',
      path: '/',
    },
    {
      id: 'other',
      path: '/other',
    },
  ];
  const list = [];
  paths.map(item => {
    const current = item.path === router.pathname;
    list.push(
      <li key={item.id}>
        <Link href={item.path}>
          <a aria-current={current ? 'page' : undefined}>{item.id}</a>
        </Link>
      </li>
    );
  });

  return (
    <nav className="l-nav">
      <ul>{list}</ul>
    </nav>
  );
});
