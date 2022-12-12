import Head from 'next/head';
import React from 'react';
import { Tags } from 'src/interface';
import map from 'lodash/map';
import { htmlToText } from 'src/lib/utils/htmlToText';
type Props = {
  title?: string;
  url?: string;
  image?: string;
  content?: string;
  tags?: Tags[];
};

const SEO = (props: Props) => {
  const keyowrds = (tags: Tags[]) => map(tags, 'name').join(', ');
  const keywordList = keyowrds(props.tags);
  const descript = htmlToText(props.content);
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

      <meta key={'og:content-keywords'} property="og:keywords" content={keywordList} />
      <meta key={'content-keywords'} name="keywords" content={keywordList} />
      <meta key={'content-keywords'} name="twitter:keywords" content={keywordList} />

      <meta property="og:title" content={props.title + ' - dobda'} />
      <meta name="title" content={props.title + ' - dobda'} />
      <meta name="twitter:title" content={props.title + ' - dobda'} />

      <meta property="og:description" content={descript} />
      <meta name="description" content={descript} />
      <meta name="twitter:description" content={descript} />
    </Head>
  );
};

export default SEO;
