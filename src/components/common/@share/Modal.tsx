import styled from 'styled-components'
import { Modal as AntModal } from 'antd'
import 'antd/dist/antd.min.css';

export const Modal = styled(AntModal)`
.ant-modal-footer{ display: none;}
.ant-modal-content{
  /* background-color: rgba(240, 250, 254, 0.9); */
  border-radius: 5px;
  /* width: 100%; */
}

`