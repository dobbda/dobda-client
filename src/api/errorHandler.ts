import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { GetServerSideProps } from 'next';
import { cookieDecod } from 'src/lib/utils/cookieDecod';
import { Exp } from 'src/interface/content-type';

let arr: any[] = [];

export const errorHandler =
  (
    getServerSideProps: ({
      ctx,
      cookie,
      exp,
    }: {
      ctx: Parameters<GetServerSideProps>[0];
      cookie: string | number | boolean;
      exp: Exp;
    }) => ReturnType<GetServerSideProps>,
  ) =>
  async (ctx: Parameters<GetServerSideProps>[0]) => {
    const cookie = ctx.req.headers.cookie || '';

    try {
      const exp = cookieDecod(ctx.req, ctx.res);
      const result = await getServerSideProps({
        ctx,
        cookie,
        exp,
      });
      return result;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        return {
          props: { error: e.code || 500 },
        };
      }
      return {
        props: { error: 500 },
      };
    }
  };
