import React from 'react';
import { HtmlViewer } from 'src/components/Editor';
import { Portfolio } from 'src/interface';
import CarouselsImages from '../Carousel';
import { MainImage } from './MainImage';

type Props = {
  data: Portfolio;
};

const PortfolioPage = ({ data }: Props) => {
  return (
    <div>
      <MainImage {...data.card} height="330px" />
      <br />
      <br />
      {data.content?.map((v, i) => {
        return (
          <div key={i}>
            {v.content && <HtmlViewer content={v.content} key={i} />}{' '}
            {v.images.length > 0 && <CarouselsImages images={v.images} key={i} />}
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioPage;
