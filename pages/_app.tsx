import * as React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { chuysTheme } from '../chuys-theme';

export default class ChuysApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={chuysTheme}>
        <>
          <GlobalStyles />

          <Container>
            <Head>
              <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Component {...pageProps} />
          </Container>
        </>
      </ThemeProvider>
    );
  }
}
