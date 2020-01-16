import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Footer from './Footer'
import Header from './Header'

library.add(fab)

interface Props {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = "Chuy's Tacos" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

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
)

export default Layout
