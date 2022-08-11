import React from 'react';
import { ContentWrapper } from './style/Card.Element';

import { QHeader } from './atom/CardHeader';
import { QBody } from './atom/CardBody';
import { QFooter } from './atom/CardFooter';
import { Question } from 'src/types';
type Props = {
	question: Question
};

const QCard = ({question}: Props) => {

  return (
    <ContentWrapper className="card-items" >
      <QHeader {...question}/>
      <div className="diff-styles" >
        <QBody {...question}/>
        <QFooter {...question}/>
      </div>
    </ContentWrapper>
  );
};

export default QCard;
