import { Empty as AntEmpty } from 'antd';
interface Props {
  descript?: string;
}
export const Empty = ({ descript }: Props) => (
  <AntEmpty description={descript && descript} image={AntEmpty.PRESENTED_IMAGE_SIMPLE} css={{ margin: '10px 0' }} />
);
