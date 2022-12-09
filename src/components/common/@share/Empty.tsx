import { Empty as AntEmpty } from 'antd';
import styled from 'styled-components';
interface Props {
  descript?: string;
  border?: boolean;
}
export const Empty = ({ descript, border }: Props) => {
  const Wrap = styled.div`
    border: solid 1px #a8a8a8;
    padding: 20px 0;
    width: 100%;
  `;
  if (border) {
    return (
      <Wrap>
        <AntEmpty description={descript && descript} image={AntEmpty.PRESENTED_IMAGE_SIMPLE} css={{ margin: '10px auto' }} />
      </Wrap>
    );
  }
  return <AntEmpty description={descript && descript} image={AntEmpty.PRESENTED_IMAGE_SIMPLE} css={{ margin: '10px auto' }} />;
};
