import type { AppContext, AppProps } from 'next/app';
import Cookies from 'cookies';
import React, { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import { useAuth, createQueryClient } from 'src/hooks';
import axios from 'axios';
import { reqAuth } from 'src/api';
import { Router } from 'next/router';
import { LoadingPage } from 'src/components/common';

function MyApp({ Component, initialAuth, pageProps: { session, ...pageProps } }: AppProps & any) {
  const [queryClient] = React.useState(() => createQueryClient());
  axios.defaults.withCredentials = true;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const showRoute = ['/questions', 'custom-project/', 'notice/'];
    const start = (url: string) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(true);
      }
    };
    const end = (url: string) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(false);
      }
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <React.Fragment>
      {loading && <LoadingPage />}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
          {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools /> : null}
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default MyApp;
