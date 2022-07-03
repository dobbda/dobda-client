import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import axios from 'axios';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
  );

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <SessionProvider session={session}>
              <GlobalStyle />

              <Component {...pageProps} />
            </SessionProvider>
          </ThemeProvider>
        </Hydrate>
        {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools /> : null}
      </QueryClientProvider>
    </React.Fragment>
  );
}
