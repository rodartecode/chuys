import * as React from 'react';
import { useState, useRef } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { useOnClickOutside } from '../utils/hooks';

import Burger from './Burger';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header';

library.add(fab);

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} />
        </div>

        <Header />

        {children}

        <Footer />

        {/* Global Styles */}

        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default Layout;
