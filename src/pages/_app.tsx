import { GlobalStyle } from 'src/styles/GlobalStyle';
import type { AppProps } from "next/app";
import React from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Hydrate>
      {process.env.NODE_ENV ==="development" ? <ReactQueryDevtools />: null}
    </QueryClientProvider>
  );
}