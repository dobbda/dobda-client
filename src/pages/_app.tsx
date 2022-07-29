import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';

import React, { useEffect } from 'react';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import axios from 'axios'

import { GetServerSideProps, NextPageContext } from 'next';
import { cookieManager } from 'src/lib/cookieManager';
import { Auth } from 'src/api';
import { requests } from 'src/store/DummyData';

function MyApp({ Component, initialAuth, pageProps: { session, ...pageProps } }: AppProps & any) {
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
	queryClient.setQueryData('authUser', initialAuth)

  return (
		
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools /> : null}
      </QueryClientProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const { ctx: { req, res },} = context;
  const initialProps = await NextApp.getInitialProps(context);
  try {
    if (!req || req?.url?.startsWith('/_next/')) return initialProps;
    const cookie = req?.headers.cookie;
   	const allCookies = await cookieManager(cookie);

		if(allCookies['jwt-access'] ){
			const initialAuth = (await axios.get(`${process.env.API_URL}/auth`,{
				headers: {...(cookie&& {cookie})}
			})).data.response;
			return {
				...initialProps,
				initialAuth
			};
		}
		return {
			...initialProps,
		};
  } catch (e) {
    return initialProps;
  }
};

export default MyApp;
