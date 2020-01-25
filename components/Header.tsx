import * as React from 'react';
import Link from 'next/link';

type Props = {};

const Header: React.FunctionComponent<Props> = () => (
  <header>
    <nav>
      <Link href='/tacos'>
        <a>Tacos</a>
      </Link>{' '}
      |
      <Link href='/about'>
        <a>Taquizas</a>
      </Link>{' '}
      |
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  </header>
);

export default Header;
