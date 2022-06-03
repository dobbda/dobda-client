import React from 'react'
import {CardWrapper, CardContainer} from './style/Card.Element'

import {QHeader} from './atom/CardHeader'
import {QBody} from './atom/CardBody'
import {QFooter} from './atom/CardFooter'
type Props = {} 

const QCard = (props: Props) => {
  return (
<CardContainer className="card-items">
      <CardWrapper>
        <QHeader />
        <QBody/>
        <QFooter />
      </CardWrapper>
      </CardContainer>
  )
}

export default QCard