import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import Cookies from 'cookies'
import React, { useEffect } from 'react';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { theme } from 'src/styles/Theme';
import axios from 'axios'

import { GetServerSideProps, NextPageContext } from 'next';
import { cookieManager } from 'src/lib/cookieManager';
import { Auth, http } from 'src/api';
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
		const cookies = new Cookies(req, res);

		//리프레쉬 토큰이 있고 액세스 토큰이 없을때 토큰 재발급
		if(!cookies.get('jwt-access') && cookies.get('jwt-refresh')){ 
			console.log('쿠쿠')
			const neTokens = (await http.get(`/auth/refresh`,{
				headers: {...(cookie&& {cookie})}
			})).data.response;
			console.log(neTokens)
			cookies.set('jwt-access', neTokens.tokens.accessToken, {// access쿠키 재세팅
        httpOnly: true,
				expires: new Date(neTokens.tokens.accessExpires) // true by default
    	})
			cookies.set('jwt-refresh', neTokens.tokens.refreshToken, {// refresh쿠키 재세팅
        httpOnly: true, // true by default
				expires: new Date(neTokens.tokens.refreshExpires),
    	})
			return {
				...initialProps,
				initialAuth:neTokens.user
			};

		}
// 유저 확인 및 저장
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
