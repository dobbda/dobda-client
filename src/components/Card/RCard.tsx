import React from 'react'
import {CardWrapper, CardContainer} from './style/Card.Element'

import {RHeader} from './atom/CardHeader'
import {RBody} from './atom/CardBody'
import {RFooter} from './atom/CardFooter'
type Props = {} 

const RCard = (props: Props) => {
  return (
<CardContainer type="R">
      <CardWrapper >
        <RHeader />
        <RBody/>
        <RFooter />
      </CardWrapper>
      </CardContainer>
  )
}

export default RCard