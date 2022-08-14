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
import { useAuth, createQueryClient } from 'src/hooks/useQuery/useAuth';
import { Auth } from 'src/types';

function MyApp({ Component, initialAuth, pageProps: { session, ...pageProps } }: AppProps & any) {
  const [queryClient] = React.useState(
    () =>createQueryClient()
  );

	// QueryClientProvider가 적용후 useQuery 사용
	const AuthQuery = ({initialAuth}: {initialAuth:Auth|any}):null => {
		useAuth(initialAuth&&initialAuth)
		return null
	}

  return (
		
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
						<AuthQuery initialAuth={initialAuth}/>
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

		// 리프레쉬 토큰이 있고 액세스 토큰이 없을때 토큰 재발급
		// if(!cookies.get('jwt-access') && cookies.get('jwt-refresh')){ 
		// 	const newTokens = (await http.get(`/auth/refresh`,{
		// 		headers: {...(cookie&& {cookie})}
		// 	})).data.response;

		// 	cookies.set('jwt-access', newTokens.tokens.accessToken, {// access쿠키 재세팅
    //     httpOnly: true,
		// 		expires: new Date(Date.now() + process.env.NEXT_PUBLIC_ACCESS_EXPIRES) // true by default
    // 	})
		// 	cookies.set('jwt-refresh', newTokens.tokens.refreshToken, {// refresh쿠키 재세팅
    //     httpOnly: true, // true by default
		// 		expires: new Date(Date.now() + process.env.NEXT_PUBLIC_REFRESH_EXPIRES),
    // 	})

		// 	cookies.set('access-expires', '11111111111111111111111111', {// access쿠키 재세팅
		// 		httpOnly: false,
		// 		expires: new Date(Date.now() + process.env.NEXT_PUBLIC_ACCESS_EXPIRES) // true by default
    // 	})
		// 	cookies.set('refresh-expires', "11111111111111111111111111", {// refresh쿠키 재세팅
		// 		httpOnly: false,
		// 		expires: new Date(Date.now() + process.env.NEXT_PUBLIC_REFRESH_EXPIRES),
    // 	})
		// 	return {
		// 		...initialProps,
		// 		initialAuth: newTokens
		// 	};
		// }

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
