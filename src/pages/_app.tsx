import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import Cookies from 'cookies'
import React, { useEffect } from 'react';
import { Hydrate, QueryClient, QueryClientProvider,useQueryClient  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import { http } from 'src/api';
import { useAuth, createQueryClient } from 'src/hooks';
import { Auth } from 'src/types';

function MyApp({ Component, initialAuth, pageProps: { session, ...pageProps } }: AppProps & any) {
  const [queryClient] = React.useState(
    () =>createQueryClient()
  );

	initialAuth&&queryClient.setQueryData("auth", initialAuth)
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
		const cookies = new Cookies(req, res);


		if(cookies.get('jwt-access')){
			const initialAuth = (await http.get(`/auth`,{
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
