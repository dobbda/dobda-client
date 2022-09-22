import type { AppContext, AppProps } from 'next/app';
import Cookies from 'cookies';
import React, { useEffect } from 'react';
import { Hydrate, QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import { useAuth, createQueryClient } from 'src/hooks';
import axios from 'axios';
import { reqAuth } from 'src/api';

function MyApp({ Component, initialAuth, pageProps: { session, ...pageProps } }: AppProps & any) {
  const [queryClient] = React.useState(() => createQueryClient());
  axios.defaults.withCredentials = true;
  return (
    <React.Fragment>
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
