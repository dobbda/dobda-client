import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>

      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
      {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools /> : null}
      </React.StrictMode>

    </QueryClientProvider>
  );
}
