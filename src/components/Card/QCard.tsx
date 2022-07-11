import React from 'react';
import { ContentWrapper } from './style/Card.Element';

import { QHeader } from './atom/CardHeader';
import { QBody } from './atom/CardBody';
import { QFooter } from './atom/CardFooter';
type Props = {};

const QCard = (props: Props) => {
  return (
    <ContentWrapper className="card-items">
      <QHeader />
      <div className="diff-styles">
        <QBody />
        <QFooter />
      </div>
    </ContentWrapper>
  );
};

export default QCard;
