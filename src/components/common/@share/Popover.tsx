import React from 'react'
import {Popover as antPopover} from 'antd'
import styled from 'styled-components'
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

type Props = {
  isArrow?:boolean
}

export const Popover = styled(antPopover)<Props>`
.ant-tooltip-arrow {
    ::after{
background-color:  #fff !important;;
    }
}
`
