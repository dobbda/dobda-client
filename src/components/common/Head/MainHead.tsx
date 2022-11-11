import Head from 'next/head';
import React from 'react';

type Props = {};

export const MainHead = (props: Props) => {
  return (
    <Head>
      <title>DOBDA</title>
      <meta charSet="utf-8" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://dobda.io" />
      <meta property="og:image" content="/img/main.png" />
      <meta property="og:type" content="website" />
      <meta
        name="keywords"
        content="개발자 Q&A, development community, outsourcint, 외주, 간단한 외주 프로젝트, sourcing, design, development"
      />
      <meta
        property="og:keywords"
        content="개발자 Q&A, development community, outsourcint, 외주, 간단한 외주 프로젝트, sourcing, design, development"
      />
      <meta property="og:title" content="프로젝트를 전문가에게 도움을 받아보세요<Q&A, sourcing>" />
    </Head>
  );
};
