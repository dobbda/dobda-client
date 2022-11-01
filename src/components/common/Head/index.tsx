import Head from 'next/head';
import React from 'react';
import { Tags } from 'src/types';
import { map } from 'lodash';
type Props = {
  title?: string;
  url?: string;
  image?: string;
  content?: string;
  tags?: Tags[];
};

const SEO = (props: Props) => {
  const keyowrds = (tags: Tags[]) => map(tags, 'name').join(', ');
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta property="og:locale" content="ko_KR" />

      <title>{props.title + ' - DOBDA'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

      <meta
        key={'default'}
        name="keywords"
        content="개발자 Q&A, development community, outsourcint, 외주, 간단한 외주 프로젝트, sourcing, design, development"
      />
      <meta
        key={'og:default'}
        property="og:keywords"
        content="개발자 Q&A, development community, outsourcint, 외주, 간단한 외주 프로젝트, sourcing, design, development"
      />
      <meta key={'og:content-keywords'} property="og:keywords" content={keyowrds(props.tags)} />
      <meta key={'content-keywords'} name="keywords" content={keyowrds(props.tags)} />
      <meta property="og:title" content={props.title + ' - dobda'} />
      <meta name="title" content={props.title + ' - dobda'} />
      <meta property="og:description" content={props.title} />
      <meta name="description" content={props.title} />
    </Head>
  );
};

export default SEO;
