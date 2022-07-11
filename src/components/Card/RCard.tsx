import React from 'react'
import { ContentWrapper} from './style/Card.Element'

import {RHeader} from './atom/CardHeader'
import {RBody} from './atom/CardBody'
import {RFooter} from './atom/CardFooter'
type Props = {
  question?:number[],

} 

const RCard = ({question}: Props) => {
  return (
    <ContentWrapper type="R">
        <RHeader />
      <div className="diff-styles">

        <RBody/>
        <RFooter />
        </div>
    </ContentWrapper>
  )
}

export default RCard